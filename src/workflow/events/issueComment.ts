import {CreatedEditedDeleted} from "./createdEditedDeleted";

/**
 * Runs your workflow anytime the issue_comment event occurs. More than one activity type triggers this event. For information about the REST API, see https://developer.github.com/v3/issues/comments/.
 */
export type IssueComment = {
    types?: CreatedEditedDeleted[];
}