/**
 * Selects the types of activity that will trigger a workflow run. Most GitHub events are triggered by more than one type of activity. For example, the event for the release resource is triggered when a release is published, unpublished, created, edited, deleted, or prereleased. The types keyword enables you to narrow down activity that causes the workflow to run. When only one activity type triggers a webhook event, the types keyword is unnecessary.
 * You can use an array of event types. For more information about each event and their activity types, see https://help.github.com/en/articles/events-that-trigger-workflows#webhook-events.
 *
 * @minItems 1
 */
export type IssueType =
    | "assigned"
    | "closed"
    | "deleted"
    | "demilestoned"
    | "edited"
    | "labeled"
    | "locked"
    | "milestoned"
    | "opened"
    | "pinned"
    | "reopened"
    | "transferred"
    | "unassigned"
    | "unlabeled"
    | "unlocked"
    | "unpinned"

/**
 * Runs your workflow anytime the issues event occurs. More than one activity type triggers this event. For information about the REST API, see https://developer.github.com/v3/issues.
 */
export type Issues = {
    types?: IssueType[];
}