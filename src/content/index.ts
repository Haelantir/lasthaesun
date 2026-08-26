import type { ProblemSeed } from './types';
import { lowTirePressure } from './problems/low-tire-pressure';
import { plannedTireProblems } from './problems/planned-tire-problems';

export { domains, objectCategories, systems } from './taxonomy';

/**
 * Every problem record in the repository.
 *
 * Adding the site's next decision means adding one file here and one line to
 * this array. No route, no page component and no layout code changes.
 */
export const problems: ProblemSeed[] = [lowTirePressure, ...plannedTireProblems];
