import {Types1} from "./types1";

/**
 * Runs your workflow anytime the check_run event occurs. More than one activity type triggers this event. For information about the REST API, see https://developer.github.com/v3/checks/runs.
 */
export type CheckRun = {
    types?: Types1;
    [k: string]: unknown;
} & ({
    [k: string]: unknown;
} | null);