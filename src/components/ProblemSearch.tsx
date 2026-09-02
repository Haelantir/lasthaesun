/**
 * Site search entry point.
 *
 * A plain GET form, deliberately not a client component: it works with
 * JavaScript disabled, ships zero bytes of JS, and results are server-rendered
 * at /search. Scaling the backend later (see src/lib/repository/search.ts)
 * requires no change here.
 */
export function ProblemSearch({
  defaultValue = '',
  label = 'Search problems',
  // Short on purpose: the long form was truncated inside the field on a
  // phone, which is where the hero search is most used.
  placeholder = 'Ignoring what?',
  large = false,
  autoFocus = false,
  id = 'site-search',
}: {
  defaultValue?: string;
  label?: string;
  placeholder?: string;
  large?: boolean;
  autoFocus?: boolean;
  id?: string;
}) {
  return (
    <form className={`search${large ? ' search--large' : ''}`} action="/search" method="get" role="search">
      <div className="search__field">
        <label className="sr-only" htmlFor={id}>
          {label}
        </label>
        <input
          type="search"
          id={id}
          name="q"
          defaultValue={defaultValue}
          placeholder={placeholder}
          autoComplete="off"
          // Only ever true on /search, where typing a query is the sole reason
          // the visitor is on the page.
          autoFocus={autoFocus}
        />
      </div>
      <button type="submit" className="button">
        Search
      </button>
    </form>
  );
}
