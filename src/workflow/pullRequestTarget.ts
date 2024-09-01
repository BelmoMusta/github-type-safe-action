import {Types16} from "./types16";

/**
 * This event is similar to pull_request, except that it runs in the context of the base repository of the pull request, rather than in the merge commit. This means that you can more safely make your secrets available to the workflows triggered by the pull request, because only workflows defined in the commit on the base repository are run. For example, this event allows you to create workflows that label and comment on pull requests, based on the contents of the event payload.
 */
export type PullRequestTarget = {
    types?: Types16;
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^(branche|tag|path)s(-ignore)?$".
     */
    [k: string]: unknown;
} & ({
    [k: string]: unknown;
} | null);