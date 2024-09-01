import {Types9} from "./types9";

/**
 * Runs your workflow anytime the milestone event occurs. More than one activity type triggers this event. For information about the REST API, see https://developer.github.com/v3/issues/milestones/.
 */
export type Milestone = {
    types?: Types9;
    [k: string]: unknown;
} & ({
    [k: string]: unknown;
} | null);