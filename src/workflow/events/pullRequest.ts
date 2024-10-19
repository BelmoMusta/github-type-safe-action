/**
 * Selects the types of activity that will trigger a workflow run. Most GitHub events are triggered by more than one
 * type of activity. For example, the event for the release resource is triggered when a release is published,
 * unpublished, created, edited, deleted, or prereleased. The types keyword enables you to narrow down activity
 * that causes the workflow to run. When only one activity type triggers a webhook event, the types keyword is
 * unnecessary.
 * You can use an array of event types. For more information about each event and their activity types,
 * see https://help.github.com/en/articles/events-that-trigger-workflows#webhook-events.
 *
 * @minItems 1
 */
import {HasPaths} from "./path";
import {HasBranches} from "./branch";

export type PullRequestType =
    | "assigned"
    | "auto_merge_disabled"
    | "auto_merge_enabled"
    | "closed"
    | "converted_to_draft"
    | "demilestoned"
    | "edited"
    | "labeled"
    | "locked"
    | "milestoned"
    | "opened"
    | "ready_for_review"
    | "reopened"
    | "review_request_removed"
    | "review_requested"
    | "synchronize"
    | "unassigned"
    | "unlabeled"
    | "unlocked"
/**
 * Runs your workflow anytime the pull_request event occurs. More than one activity type triggers this event. For information about the REST API, see https://developer.github.com/v3/pulls.
 * Note: Workflows do not run on private base repositories when you open a pull request from a forked repository.
 * When you create a pull request from a forked repository to the base repository, GitHub sends the pull_request event to the base repository and no pull request events occur on the forked repository.
 * Workflows don't run on forked repositories by default. You must enable GitHub Actions in the Actions tab of the forked repository.
 * The permissions for the GITHUB_TOKEN in forked repositories is read-only. For more information about the GITHUB_TOKEN, see https://help.github.com/en/articles/virtual-environments-for-github-actions.
 */
export type PullRequest = {
    types?: PullRequestType[];
} & HasBranches & HasPaths