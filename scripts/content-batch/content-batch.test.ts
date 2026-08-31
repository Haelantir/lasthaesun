/**
 * Tests for the batch runner's input handling.
 *
 * Nothing here reaches the network. The two things worth pinning down are the
 * subjects format — a file a person edits by hand every day, where a silent
 * misread costs a whole batch — and the guard that keeps editorial notes from
 * being mistaken for evidence.
 */
import { describe, expect, it } from 'vitest';

import { buildPlacementPrompt, parsePlacement } from './placement';
import { parseSubjects, promptFor, type Subject } from './run';

const BASE = ['header', '', 'TOPIC:', '[여기에 토픽 하나만 적는다]', '', 'rest'].join('\n');

describe('subjects file', () => {
  it('reads one topic per unindented line', () => {
    const subjects = parseSubjects('Can I Ignore A?\nCan I Ignore B?\n');
    expect(subjects).toEqual([
      { topic: 'Can I Ignore A?', notes: '' },
      { topic: 'Can I Ignore B?', notes: '' },
    ]);
  });

  it('ignores blank lines, comments and list bullets', () => {
    const subjects = parseSubjects('# a comment\n\n- Can I Ignore A?\n\n* Can I Ignore B?\n');
    expect(subjects.map((subject) => subject.topic)).toEqual(['Can I Ignore A?', 'Can I Ignore B?']);
  });

  it('attaches indented lines to the topic above as notes', () => {
    const subjects = parseSubjects(
      ['Can I Ignore a Damaged Passport?', '  Water damage, a torn page,', '  a bent cover.', '', 'Can I Ignore B?'].join(
        '\n',
      ),
    );
    expect(subjects).toEqual([
      { topic: 'Can I Ignore a Damaged Passport?', notes: 'Water damage, a torn page, a bent cover.' },
      { topic: 'Can I Ignore B?', notes: '' },
    ]);
  });

  it('does not treat an indented first line as notes with no topic to hold them', () => {
    expect(parseSubjects('  orphaned note\nCan I Ignore A?')).toEqual([
      { topic: 'orphaned note', notes: '' },
      { topic: 'Can I Ignore A?', notes: '' },
    ]);
  });

  it('reads CRLF and a BOM the same as plain LF', () => {
    const plain = parseSubjects('Can I Ignore A?\n  a note\n');
    expect(parseSubjects('﻿Can I Ignore A?\r\n  a note\r\n')).toEqual(plain);
  });
});

describe('prompt assembly', () => {
  const bare: Subject = { topic: 'Can I Ignore A?', notes: '' };

  it('substitutes the topic into the placeholder', () => {
    const prompt = promptFor(BASE, bare);
    expect(prompt).toContain('TOPIC:\nCan I Ignore A?');
    expect(prompt).not.toContain('[여기에');
  });

  it('leaves the prompt otherwise untouched when a topic has no notes', () => {
    expect(promptFor(BASE, bare)).toBe(BASE.replace('[여기에 토픽 하나만 적는다]', 'Can I Ignore A?'));
  });

  /* A note is a hint about what to cover, never a finding. Dropped in bare it
   * reads as something the writer may cite, and the verdict stops following the
   * sources — which is the one failure this pipeline cannot detect downstream. */
  it('wraps notes in a guard that subordinates them to the research', () => {
    const prompt = promptFor(BASE, { topic: 'Can I Ignore A?', notes: 'Split by water damage vs a torn page.' });
    expect(prompt).toContain('Split by water damage vs a torn page.');
    expect(prompt).toContain('사실 아님');
    expect(prompt).toContain('VERDICT, URGENCY, SAFETY_RISK는 반드시 네가 직접 검증한 출처에서 나와야 한다.');
    expect(prompt).toContain('조사 결과가 다르면 조사 결과를 따른다.');
  });
});

describe('placement', () => {
  const subjects: Subject[] = [
    { topic: 'Can I Ignore a Damaged Passport?', notes: '' },
    { topic: 'Can I Ignore a Late Credit Card Payment?', notes: '' },
    { topic: 'Can I Ignore Low Tire Pressure?', notes: '' },
    { topic: 'Can I Ignore a Fourth Thing?', notes: '' },
  ];

  const response = ['1: passports', '2: NONE', '3: DUPLICATE', '4: not-a-real-system', 'PROPOSAL:', 'Money -> Cards -> Payments'].join(
    '\n',
  );

  it('maps each answer back to its topic by number', () => {
    const { placements } = parsePlacement(response, subjects);
    expect(placements[0]).toEqual({ topic: subjects[0]!.topic, system: 'passports' });
  });

  it('separates "nothing fits" from "already published"', () => {
    const { placements } = parsePlacement(response, subjects);
    expect(placements[1]).toEqual({ topic: subjects[1]!.topic, system: null });
    expect(placements[2]).toEqual({ topic: subjects[2]!.topic, system: null, duplicate: true });
  });

  /* A slug that does not exist is not a placement. Accepted as one, the topic
   * would be generated and then fail at import on an unknown system — three
   * minutes and a web-search bill later. */
  it('refuses a system slug that does not exist', () => {
    const { placements } = parsePlacement(response, subjects);
    expect(placements[3]).toEqual({ topic: subjects[3]!.topic, system: null, invalid: 'not-a-real-system' });
  });

  it('treats a missing answer as no placement rather than a silent pass', () => {
    expect(parsePlacement('1: passports', subjects).placements[1]).toEqual({ topic: subjects[1]!.topic, system: null });
  });

  it('extracts the proposal block', () => {
    expect(parsePlacement(response, subjects).proposal).toBe('Money -> Cards -> Payments');
    expect(parsePlacement('1: passports', subjects).proposal).toBe('');
  });

  /* Reserved slugs are the pages a topic is MEANT to fill. Listed alongside
   * published ones, every topic the roadmap already planned for comes back as a
   * duplicate — which is exactly what happened before they were split. */
  it('presents published and reserved slugs as separate lists', () => {
    const prompt = buildPlacementPrompt(subjects);
    expect(prompt).toContain('이미 발행된 problem slug');
    expect(prompt).toContain('예약된 problem slug');
    expect(prompt).toContain('토픽이 "예약된 slug"에 해당하면 그것은 중복이 아니다');
  });
});
