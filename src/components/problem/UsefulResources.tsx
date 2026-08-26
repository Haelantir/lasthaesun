/**
 * BLOCK 7 — "Useful right now".
 *
 * Positioned immediately after the action steps, which is where intent is
 * highest: the reader has just been told to check a pressure and add air.
 *
 * It is monetisation-READY and monetisation-FREE. Every field an affiliate
 * programme needs already exists in `recommended_resources`; today `url` is null
 * for both records, so each renders as an informational card with no outbound
 * link and no fake purchase button. Adding real destinations later is a content
 * change — this component does not change at all.
 */

export interface ResourceItem {
  title: string;
  description: string;
  url: string | null;
  affiliate: boolean;
}

export function UsefulResources({ resources }: { resources: ResourceItem[] }) {
  if (resources.length === 0) return null;

  return (
    <ul className="resources">
      {resources.map((resource) => (
        <li className="card resource" key={resource.title}>
          <h3 className="resource__title">
            {resource.url ? (
              <a href={resource.url} rel={resource.affiliate ? 'sponsored noopener' : 'noopener'}>
                {resource.title}
              </a>
            ) : (
              resource.title
            )}
          </h3>
          <p className="resource__desc">{resource.description}</p>
          {resource.affiliate ? (
            <p className="resource__note">We may earn a commission if you buy through this link.</p>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
