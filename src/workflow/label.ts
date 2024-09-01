import {Types7} from "./types7";

/**
 * Runs your workflow anytime the label event occurs. More than one activity type triggers this event. For information about the REST API, see https://developer.github.com/v3/issues/labels/.
 */
export type Label = {
    types?: Types7;
    [k: string]: unknown;
} & ({
    [k: string]: unknown;
} | null);