/**
 * Tests for the batch runner's input handling.
 *
 * Nothing here reaches the network. The two things worth pinning down are the
 * subjects format — a file a person edits by hand every day, where a silent
 * misread costs a whole batch — and the guard that keeps editorial notes from
 * being mistaken for evidence.
 */
import { describe, expect, it } from 'vitest';

import { parseSubjects, promptFor, type Subject } from './run';

/** The tests care about the topics; the loose-mode metadata is asserted separately. */
const parseSubjectsRaw = (source: string) => parseSubjects(source).subjects;

const BASE = ['header', '', 'TOPIC:', '[여기에 토픽 하나만 적는다]', '', 'rest'].join('\n');

describe('subjects file', () => {
  it('reads one topic per unindented line', () => {
    const subjects = parseSubjectsRaw('Can I Ignore A?\nCan I Ignore B?\n');
    expect(subjects).toEqual([
      { topic: 'Can I Ignore A?', notes: '' },
      { topic: 'Can I Ignore B?', notes: '' },
    ]);
  });

  it('ignores blank lines, comments and list bullets', () => {
    const subjects = parseSubjectsRaw('# a comment\n\n- Can I Ignore A?\n\n* Can I Ignore B?\n');
    expect(subjects.map((subject) => subject.topic)).toEqual(['Can I Ignore A?', 'Can I Ignore B?']);
  });

  it('attaches indented lines to the topic above as notes', () => {
    const subjects = parseSubjectsRaw(
      ['Can I Ignore a Damaged Passport?', '  Water damage, a torn page,', '  a bent cover.', '', 'Can I Ignore B?'].join(
        '\n',
      ),
    );
    expect(subjects).toEqual([
      { topic: 'Can I Ignore a Damaged Passport?', notes: 'Water damage, a torn page, a bent cover.' },
      { topic: 'Can I Ignore B?', notes: '' },
    ]);
  });

  it('drops an indented line that has no topic above it to hold it', () => {
    const { subjects, dropped } = parseSubjects('  orphaned note\nCan I Ignore A?');
    expect(subjects).toEqual([{ topic: 'Can I Ignore A?', notes: '' }]);
    expect(dropped).toEqual(['orphaned note']);
  });

  it('reads CRLF and a BOM the same as plain LF', () => {
    const plain = parseSubjectsRaw('Can I Ignore A?\n  a note\n');
    expect(parseSubjectsRaw('﻿Can I Ignore A?\r\n  a note\r\n')).toEqual(plain);
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

/* The topics usually arrive as a pasted answer, not a tidy list: preamble, a
 * suggested verdict under each title, a paragraph of reasoning. Reformatting
 * that by hand every morning is the chore this pipeline exists to remove. */
describe('subjects file, pasted as-is', () => {
  const messy = [
    '응. 여행 카테고리는 먹힐 가능성 높아요.',
    '제가 첫 10개를 깐다면 이 순서로 갑니다.',
    'Can I Ignore a Damaged Passport?',
    '→ PROBABLY NOT',
    '물에 젖음·찢어짐·사진면 손상으로 상황 selector 만들기 좋습니다.',
    'Can I Ignore a Short Layover Between Flights?',
    '→ IT DEPENDS',
    '같은 티켓인지 별도 티켓인지에 따라 답이 갈립니다.',
  ].join('\n');

  it('picks the questions out and drops the preamble', () => {
    const { subjects, loose } = parseSubjects(messy);
    expect(loose).toBe(true);
    expect(subjects.map((subject) => subject.topic)).toEqual([
      'Can I Ignore a Damaged Passport?',
      'Can I Ignore a Short Layover Between Flights?',
    ]);
  });

  it('keeps the reasoning under each topic as its notes', () => {
    const { subjects } = parseSubjects(messy);
    expect(subjects[0]!.notes).toContain('물에 젖음');
    expect(subjects[1]!.notes).toContain('별도 티켓');
  });

  /* The one line that must never survive. Kept as a note it would hand the
   * writer its conclusion before it had read a single source. */
  it('drops a suggested verdict rather than passing it on as a note', () => {
    const { subjects, dropped } = parseSubjects(messy);
    for (const subject of subjects) {
      expect(subject.notes).not.toContain('PROBABLY NOT');
      expect(subject.notes).not.toContain('IT DEPENDS');
    }
    expect(dropped.some((line) => line.includes('PROBABLY NOT'))).toBe(true);
  });

  it('leaves a clean list alone', () => {
    const clean = parseSubjects('Can I Ignore A?\nCan I Ignore B?\n  a note\n');
    expect(clean.loose).toBe(false);
    expect(clean.dropped).toEqual([]);
    expect(clean.subjects).toEqual([
      { topic: 'Can I Ignore A?', notes: '' },
      { topic: 'Can I Ignore B?', notes: 'a note' },
    ]);
  });

  it('leaves a list of non-question topics alone too', () => {
    const clean = parseSubjects('Dog Eating Grass\nCat Sneezing\n');
    expect(clean.loose).toBe(false);
    expect(clean.subjects.map((subject) => subject.topic)).toEqual(['Dog Eating Grass', 'Cat Sneezing']);
  });
});
