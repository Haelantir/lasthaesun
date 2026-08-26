/**
 * BLOCK 10 — "Common questions".
 *
 * Plain headings and paragraphs. Two deliberate omissions:
 *
 * 1. No FAQPage structured data. Google restricted FAQ rich results to
 *    government and health sites, so marking this up is schema for schema's
 *    sake — it buys nothing and adds a maintenance surface.
 * 2. No <details> accordion. These are sub-intents people search for, and
 *    collapsing them hides the answer behind a click for no benefit on a page
 *    this short.
 */

export interface QuestionItem {
  question: string;
  answer: string;
}

export function CommonQuestions({ questions }: { questions: QuestionItem[] }) {
  if (questions.length === 0) return null;

  return (
    <div className="questions">
      {questions.map((item) => (
        <div key={item.question}>
          <h3 className="question__q">{item.question}</h3>
          <p className="question__a">{item.answer}</p>
        </div>
      ))}
    </div>
  );
}
