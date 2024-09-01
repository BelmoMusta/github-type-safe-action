import {Types18} from "./types18";

/**
 * Runs your workflow anytime the release event occurs. More than one activity type triggers this event. For information about the REST API, see https://developer.github.com/v3/repos/releases/ in the GitHub Developer documentation.
 */
export type Release = {
    types?: Types18;
    [k: string]: unknown;
} & ({
    [k: string]: unknown;
} | null);