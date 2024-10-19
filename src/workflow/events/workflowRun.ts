/**
 * Selects the types of activity that will trigger a workflow run. Most GitHub events are triggered by more than one type of activity. For example, the event for the release resource is triggered when a release is published, unpublished, created, edited, deleted, or prereleased. The types keyword enables you to narrow down activity that causes the workflow to run. When only one activity type triggers a webhook event, the types keyword is unnecessary.
 * You can use an array of event types. For more information about each event and their activity types, see https://help.github.com/en/articles/events-that-trigger-workflows#webhook-events.
 *
 */
export type WorkflowRunType = "requested" | "completed" | "in_progress"
/**
 * This event occurs when a workflow run is requested or completed, and allows you to execute a workflow based on the
 * finished result of another workflow. For example, if your pull_request workflow generates build artifacts, you can
 * create a new workflow that uses workflow_run to analyze the results and add a comment to the original pull request.
 */

export type WorkflowRun = {
    types?: WorkflowRunType[];
    workflows?: string[];
}