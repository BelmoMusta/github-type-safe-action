/**
 * Selects the types of activity that will trigger a workflow run. Most GitHub events are triggered by more than one type of activity. For example, the event for the release resource is triggered when a release is published, unpublished, created, edited, deleted, or prereleased. The types keyword enables you to narrow down activity that causes the workflow to run. When only one activity type triggers a webhook event, the types keyword is unnecessary.
 * You can use an array of event types. For more information about each event and their activity types, see https://help.github.com/en/articles/events-that-trigger-workflows#webhook-events.
 *
 * @minItems 1
 */
export type DiscussionTypes =
    | "answered"
    | "category_changed"
    | "created"
    | "deleted"
    | "edited"
    | "labeled"
    | "locked"
    | "pinned"
    | "transferred"
    | "unanswered"
    | "unlabeled"
    | "unlocked"
    | "unpinned"
/**
 * Runs your workflow anytime the discussion event occurs. More than one activity type triggers this event. For information about the GraphQL API, see https://docs.github.com/en/graphql/guides/using-the-graphql-api-for-discussions
 */
export type Discussion = {
    types?: DiscussionTypes[];
}