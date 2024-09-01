import {Types11} from "./types11";

/**
 * Runs your workflow anytime the project_card event occurs. More than one activity type triggers this event. For information about the REST API, see https://developer.github.com/v3/projects/cards.
 */
export type ProjectCard = {
    types?: Types11;
    [k: string]: unknown;
} & ({
    [k: string]: unknown;
} | null);