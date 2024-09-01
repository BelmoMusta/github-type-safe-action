import {Types15} from "./types15";

/**
 * Runs your workflow anytime a comment on a pull request's unified diff is modified, which triggers the pull_request_review_comment event. More than one activity type triggers this event. For information about the REST API, see https://developer.github.com/v3/pulls/comments.
 * Note: Workflows do not run on private base repositories when you open a pull request from a forked repository.
 * When you create a pull request from a forked repository to the base repository, GitHub sends the pull_request event to the base repository and no pull request events occur on the forked repository.
 * Workflows don't run on forked repositories by default. You must enable GitHub Actions in the Actions tab of the forked repository.
 * The permissions for the GITHUB_TOKEN in forked repositories is read-only. For more information about the GITHUB_TOKEN, see https://help.github.com/en/articles/virtual-environments-for-github-actions.
 */
export type PullRequestReviewComment = {
    types?: Types15;
    [k: string]: unknown;
} & ({
    [k: string]: unknown;
} | null);