import {Types3} from "./types3";

/**
 * Runs your workflow anytime the discussion event occurs. More than one activity type triggers this event. For information about the GraphQL API, see https://docs.github.com/en/graphql/guides/using-the-graphql-api-for-discussions
 */
export type Discussion = {
    types?: Types3;
    [k: string]: unknown;
} & ({
    [k: string]: unknown;
} | null);