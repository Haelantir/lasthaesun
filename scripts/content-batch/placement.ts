/**
 * The placement pass: which existing system does each topic belong to?
 *
 * The writer already does this per topic — the authoring prompt hands it the
 * system list and tells it to refuse rather than force-fit. What it cannot do is
 * see the batch. Ten travel topics arriving one at a time each conclude, quite
 * correctly, that nothing fits; run with taxonomy creation switched on, that is
 * ten systems holding one page each. The shape those ten actually wanted — five
 * objects, seven systems — is only visible when you look at all ten together.
 *
 * So this runs once, over the whole batch, before a single expensive generation
 * starts. It answers two questions:
 *
 *   1. which topics already have a home (most of them, most days), and
 *   2. what shape the rest would need — as a PROPOSAL for a person to approve,
 *      never as an edit.
 *
 * The saving is not subtle. Without it, a batch of ten homeless topics costs
 * thirty minutes of web-searching generation and returns ten refusals.
 */
import { objectCategories, problems, systems } from '../../src/content/index';
import { writeTopic, type WriterConfig } from './writer';
import type { Subject } from './run';

export interface Placement {
  topic: string;
  /** A published system slug, or null when nothing fits. */
  system: string | null;
  /** The same question as a page that is already published. */
  duplicate?: boolean;
  /** Set when the model named a system that does not exist. */
  invalid?: string;
}

export interface PlacementReport {
  placements: Placement[];
  /** The model's suggested taxonomy for the unplaced topics, as free text. */
  proposal: string;
}

/** Same model, but a routing question: no web search, and no deep reasoning. */
export function placementConfig(config: WriterConfig): WriterConfig {
  return {
    ...config,
    effort: process.env.CONTENT_PLACEMENT_EFFORT?.trim() || 'low',
    webSearch: false,
    timeoutMs: 5 * 60 * 1000,
  };
}

export function buildPlacementPrompt(subjects: Subject[]): string {
  const live = systems
    .filter((system) => system.status === 'published')
    .map((system) => {
      const object = objectCategories.find((o) => o.slug === system.objectSlug);
      return `  ${system.slug.padEnd(34)}${object?.name ?? '?'} · ${system.name}`;
    })
    .sort()
    .join('\n');

  // Published and reserved slugs mean opposite things here and must not be one
  // list. A published slug is a duplicate to refuse; a reserved one is the very
  // page this topic is meant to fill, and calling it a duplicate would reject
  // every topic the roadmap already planned for.
  const published = problems.filter((problem) => problem.status === 'published').map((problem) => problem.slug);
  const reserved = problems.filter((problem) => problem.status !== 'published').map((problem) => problem.slug);

  const list = subjects
    .map((subject, index) => `${index + 1}. ${subject.topic}${subject.notes === '' ? '' : `\n   (메모: ${subject.notes})`}`)
    .join('\n');

  return `아래는 caniignoreit.com의 발행된 system 목록이다.

${live}

이미 발행된 problem slug (글이 존재한다):
${published.sort().join(', ')}

예약된 problem slug (아직 글이 없다. 채워지기를 기다리는 자리다):
${reserved.sort().join(', ')}

────────────────────────────────────────────────────
아래 토픽 각각이 어느 system에 들어가야 하는지 판정하라.

${list}
────────────────────────────────────────────────────

규칙:
- 자연스럽게 맞는 system이 있으면 그 slug를 그대로 쓴다.
- 억지로 끼워 맞추지 않는다. 어색하면 NONE이 정답이다.
- 토픽이 "예약된 slug"에 해당하면 그것은 중복이 아니다. 정상 배치다.
  그 slug가 속한 system slug를 답하라.
- "이미 발행된 slug"와 사실상 같은 질문일 때만 DUPLICATE로 답한다.

출력 형식을 정확히 지킨다. 설명이나 서론을 붙이지 않는다.

1: <system slug | NONE | DUPLICATE>
2: <...>
(토픽 개수만큼)

NONE이 하나라도 있으면, 그 다음 줄부터 이어서 출력한다:

PROPOSAL:
<NONE으로 판정된 토픽들을 함께 담을 taxonomy 제안.
 DOMAIN -> OBJECT -> SYSTEM 계층으로 적는다.
 반드시 지킬 것: 페이지 하나만 담을 system은 만들지 않는다.
 NONE 토픽들을 먼저 주제별로 묶고, 그 묶음마다 system을 하나씩 제안한다.
 각 system이 앞으로 담을 수 있는 다른 문제도 두세 개씩 예시로 적는다.
 기존 system 목록과 이름이 비슷한 것을 새로 만들지 않는다.>

NONE이 하나도 없으면 PROPOSAL 절 자체를 생략한다.
`;
}

export function parsePlacement(response: string, subjects: Subject[]): PlacementReport {
  const valid = new Set(systems.filter((system) => system.status === 'published').map((system) => system.slug));

  const answers = new Map<number, string>();
  for (const line of response.split(/\r?\n/)) {
    const match = /^\s*(\d+)\s*[:.]\s*(\S+)/.exec(line);
    if (match) answers.set(Number(match[1]), match[2]!.trim());
  }

  const placements = subjects.map((subject, index) => {
    const answer = answers.get(index + 1);
    if (answer === 'DUPLICATE') return { topic: subject.topic, system: null, duplicate: true };
    if (answer === undefined || answer === 'NONE') return { topic: subject.topic, system: null };
    if (!valid.has(answer)) {
      // A hallucinated slug is not a placement. Treating it as one would send the
      // whole topic to an import that fails on an unknown system much later.
      return { topic: subject.topic, system: null, invalid: answer };
    }
    return { topic: subject.topic, system: answer };
  });

  const proposalAt = response.indexOf('PROPOSAL:');
  const proposal = proposalAt === -1 ? '' : response.slice(proposalAt + 'PROPOSAL:'.length).trim();

  return { placements, proposal };
}

export async function placeTopics(subjects: Subject[], config: WriterConfig): Promise<PlacementReport> {
  const { text } = await writeTopic(buildPlacementPrompt(subjects), placementConfig(config));
  return parsePlacement(text, subjects);
}
