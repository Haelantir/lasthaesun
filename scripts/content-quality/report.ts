/**
 * Reporting: one console summary a person can act on, one JSON file a machine
 * can diff. Both record which prompt version produced the verdict, so an old
 * report is never mistaken for a current standard.
 */
import fs from 'node:fs';
import path from 'node:path';

import { REPORT_DIR } from './config';
import type { QualityReport } from './pipeline';


const OUTCOME_LABEL: Record<QualityReport['final'], string> = {
  PASS: 'PASS',
  FAIL: 'FAIL',
  BLOCKED: 'FAIL (blocked before review)',
  FAILED_REVIEW: 'FAILED_REVIEW',
  FACT_CHECK_FAILED: 'FAIL (rewrite changed meaning)',
  ERROR: 'ERROR (review incomplete — not a pass)',
};

function scoreLine(label: string, score: number, pass: boolean): string {
  return `${label.padEnd(16)} ${String(Math.round(score)).padStart(3)} ${pass ? 'PASS' : 'FAIL'}`;
}

export function renderConsole(report: QualityReport): string {
  const lines: string[] = ['', 'CONTENT QUALITY REPORT', report.h1, ''];
  const last = [...report.cycles].reverse().find((cycle) => cycle.judge !== null);
  const judgement = last?.judge ?? null;
  const deterministic = report.cycles.at(-1)?.deterministic;

  if (judgement) {
    lines.push(
      scoreLine('USEFULNESS', judgement.response.usefulness.score, judgement.gates.usefulness),
      scoreLine('NATURALNESS', judgement.response.naturalness.score, judgement.gates.naturalness),
      scoreLine('LENGTH', judgement.response.length.score, judgement.gates.length),
      '',
    );
  } else {
    lines.push('No editorial review was run.', '');
  }

  if (deterministic) {
    lines.push(
      `Deterministic checks: ${deterministic.counts.fail} fail, ${deterministic.counts.warn} warn`,
      `Prose: ${deterministic.metrics.totalWords} words, measured against ${report.baseline.goldSize} Gold Set pages frozen ${report.baseline.frozenAt.slice(0, 10)}`,
      '',
    );
    const notable = deterministic.findings.filter((f) => f.severity !== 'info').slice(0, 8);
    if (notable.length > 0) {
      lines.push('Automated findings:');
      for (const finding of notable) lines.push(`  [${finding.severity}] ${finding.message}`);
      lines.push('');
    }
  }

  if (judgement) {
    const clusters = judgement.response.naturalness.repetition_clusters;
    const unnecessary = clusters.filter((c) => !c.necessary);
    lines.push(
      'Semantic repetition:',
      clusters.length === 0
        ? '  none found'
        : `  ${unnecessary.length} unnecessary cluster${unnecessary.length === 1 ? '' : 's'} of ${clusters.length}`,
    );
    for (const cluster of unnecessary.slice(0, 3)) {
      lines.push(`    "${cluster.claim}" — ${cluster.sections.join(', ')}`);
    }
    lines.push(
      '',
      'Compression estimate:',
      `  ${Math.round(judgement.response.compression.estimated_removable_percent)}% — ${judgement.response.compression.explanation}`,
      '',
    );
    if (judgement.modelDisagreed) {
      lines.push('Note: the model\'s own final_pass disagreed with the thresholds; the thresholds decided.', '');
    }
  }

  if (report.rewrites.length > 0) {
    const applied = report.rewrites.reduce((sum, r) => sum + r.applied.length, 0);
    lines.push(`Rewrite: ${report.rewrites.length} cycle(s), ${applied} field(s) changed`, '');
  }

  if (report.factCheck) {
    lines.push(
      `Fact preservation: ${report.factCheck.pass ? 'PASS' : 'FAIL'} (${report.factCheck.response.violations.length} violation(s))`,
      '',
    );
    for (const violation of report.factCheck.response.violations.slice(0, 5)) {
      lines.push(`  [${violation.severity}] ${violation.type} at ${violation.path}: ${violation.detail}`);
    }
    if (report.factCheck.response.violations.length > 0) lines.push('');
  }

  lines.push('FINAL:', OUTCOME_LABEL[report.final]);
  for (const blocker of report.blockers.slice(0, 10)) lines.push(`- ${blocker}`);
  if (report.error) lines.push(`- ${report.error}`);

  const { inputTokens, outputTokens, costUsd } = report.usage;
  if (report.usage.calls.length > 0) {
    lines.push(
      '',
      `API: ${report.usage.calls.length} call(s), ${inputTokens} in / ${outputTokens} out tokens${
        costUsd === null ? '' : `, ~$${costUsd.toFixed(4)}`
      }`,
    );
  }
  lines.push(`Prompts: judge v${report.promptVersions.judge}, rewrite v${report.promptVersions.rewrite}, fact-check v${report.promptVersions.factCheck}`);
  lines.push('');
  return lines.join('\n');
}

export interface WrittenReport {
  jsonPath: string;
  revisionPath: string | null;
}

export function writeReport(report: QualityReport, dir = REPORT_DIR): WrittenReport {
  fs.mkdirSync(dir, { recursive: true });
  const jsonPath = path.join(dir, `${report.slug}.json`);
  fs.writeFileSync(jsonPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');

  let revisionPath: string | null = null;
  if (report.revised) {
    revisionPath = path.join(dir, `${report.slug}.revised.json`);
    const revisions = report.rewrites.flatMap((cycle) =>
      cycle.applied.map((revision) => ({ cycle: cycle.cycle, ...revision })),
    );
    fs.writeFileSync(
      revisionPath,
      `${JSON.stringify(
        {
          slug: report.slug,
          final: report.final,
          note:
            'Field-level replacements produced by the rewrite stage. Apply them to the content file by hand or with an agent; nothing here is written back to src/content automatically.',
          changedPaths: report.revised.changedPaths,
          revisions,
        },
        null,
        2,
      )}\n`,
      'utf8',
    );
  }

  return { jsonPath, revisionPath };
}
