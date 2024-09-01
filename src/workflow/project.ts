import {Types10} from "./types10";

/**
 * Runs your workflow anytime the project event occurs. More than one activity type triggers this event. For information about the REST API, see https://developer.github.com/v3/projects/.
 */
export type Project = {
    types?: Types10;
    [k: string]: unknown;
} & ({
    [k: string]: unknown;
} | null);