/**
 * The environment that the job references
 */
export interface Environment {
    /**
     * The name of the environment configured in the repo.
     */
    name: string;
    /**
     * A deployment URL
     */
    url?: string;
}