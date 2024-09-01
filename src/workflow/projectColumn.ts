import {Types12} from "./types12";

/**
 * Runs your workflow anytime the project_column event occurs. More than one activity type triggers this event. For information about the REST API, see https://developer.github.com/v3/projects/columns.
 */
export type ProjectColumn = {
    types?: Types12;
    [k: string]: unknown;
} & ({
    [k: string]: unknown;
} | null);