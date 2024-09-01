import {Types6} from "./types6";

/**
 * Runs your workflow anytime the issues event occurs. More than one activity type triggers this event. For information about the REST API, see https://developer.github.com/v3/issues.
 */
export type Issues = {
    types?: Types6;
    [k: string]: unknown;
} & ({
    [k: string]: unknown;
} | null);