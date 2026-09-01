import './compat.css';

/**
 * The compatibility section owns its stylesheet. Importing it here rather than
 * in the root layout means /use/ styles can never leak onto a problem page, and
 * a reader who never visits this section never downloads them.
 */
export default function UseSectionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
