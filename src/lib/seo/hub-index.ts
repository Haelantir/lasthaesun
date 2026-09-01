/**
 * When a hub earns a place in the search index.
 *
 * A hub is indexable once it holds enough answers to be a list rather than a
 * signpost. Below the threshold its whole body is a heading and one or two
 * links — a smaller, weaker copy of the page it links to, competing with that
 * page for the same query. Google picks one of the two and ignores the other,
 * and we do not get to choose which.
 *
 * Three is where "a page with a link on it" becomes "a page that answers
 * something". At the time this was written 47 of 67 systems held exactly one
 * published problem; the threshold keeps all 47 out while admitting every
 * domain and every object category that the compatibility pairings filled in.
 *
 * The stored `indexable` column still applies to problems, where it is an
 * authored decision. For hubs the count IS the decision, because the alternative
 * is a flag that has to be remembered and re-checked every time content lands.
 */
export const HUB_INDEX_THRESHOLD = 3;

/** `answers` is published problems plus pairings filed under the node. */
export function hubIsIndexable(answers: number): boolean {
  return answers >= HUB_INDEX_THRESHOLD;
}
