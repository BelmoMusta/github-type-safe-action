import {CreatedEditedDeleted} from "./createdEditedDeleted";

/**
 * Runs your workflow anytime the discussion_comment event occurs. More than one activity type triggers this event. For information about the GraphQL API, see https://docs.github.com/en/graphql/guides/using-the-graphql-api-for-discussions
 */
export type DiscussionComment = {
    types?: CreatedEditedDeleted [];
}