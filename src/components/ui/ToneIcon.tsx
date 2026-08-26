import type { Glyph } from '@/lib/verdict';

/**
 * Inline SVG, four shapes, no icon package.
 *
 * The shapes differ per tone (tick / clock / triangle / octagon) so the icon
 * still distinguishes states in greyscale. It is always decorative — every
 * caller pairs it with a text label — hence `aria-hidden`.
 */
export function ToneIcon({
  glyph,
  className,
  size = 20,
}: {
  glyph: Glyph;
  className?: string;
  size?: number;
}) {
  const common = {
    className,
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2.2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    focusable: false,
  };

  switch (glyph) {
    case 'check':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="m8.5 12.2 2.4 2.4 4.6-4.9" />
        </svg>
      );
    case 'clock':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7.2V12l3 1.9" />
        </svg>
      );
    case 'alert':
      return (
        <svg {...common}>
          <path d="M12 3.8 21 19.4H3L12 3.8Z" />
          <path d="M12 9.6v4.1" />
          <path d="M12 16.6h.01" />
        </svg>
      );
    case 'stop':
      return (
        <svg {...common}>
          <path d="M8.2 3h7.6L21 8.2v7.6L15.8 21H8.2L3 15.8V8.2L8.2 3Z" />
          <path d="M12 7.8v4.6" />
          <path d="M12 16.2h.01" />
        </svg>
      );
    case 'info':
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 11v5" />
          <path d="M12 8h.01" />
        </svg>
      );
  }
}
