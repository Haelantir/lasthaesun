/**
 * Analytics hooks with no analytics vendor.
 *
 * Nothing is loaded, no third-party script blocks rendering, and the site is
 * fully functional with this file doing nothing at all. The value here is that
 * the interaction points are already named and instrumented, so wiring up a
 * provider later is a change to `send()` alone.
 */

export type AnalyticsEvent =
  | 'problem_page_view'
  | 'check_situation_click'
  | 'scenario_selected'
  | 'related_problem_click'
  | 'useful_resource_click'
  | 'site_search'
  | 'search_result_click';

type Payload = Record<string, string | number | boolean | undefined>;

function isEnabled(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT);
}

export function track(event: AnalyticsEvent, payload: Payload = {}): void {
  if (!isEnabled() || typeof navigator === 'undefined') return;

  const endpoint = process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT;
  if (!endpoint) return;

  try {
    const body = JSON.stringify({ event, ...payload, at: Date.now() });
    // `sendBeacon` never delays navigation and never blocks the main thread.
    navigator.sendBeacon?.(endpoint, body);
  } catch {
    // Analytics must never break a page.
  }
}
