import {Types8} from "./types8";

/**
 * Runs your workflow when a pull request is added to a merge queue, which adds the pull request to a merge group. For information about the merge queue, see https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request-with-a-merge-queue .
 */
export type MergeGroup = {
    types?: Types8;
    [k: string]: unknown;
} & ({
    [k: string]: unknown;
} | null);