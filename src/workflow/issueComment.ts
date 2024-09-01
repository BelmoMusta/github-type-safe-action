import {Types5} from "./types5";

/**
 * Runs your workflow anytime the issue_comment event occurs. More than one activity type triggers this event. For information about the REST API, see https://developer.github.com/v3/issues/comments/.
 */
export type IssueComment = {
    types?: Types5;
    [k: string]: unknown;
} & ({
    [k: string]: unknown;
} | null);