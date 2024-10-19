export type CheckRunType = "created" | "rerequested" | "completed" | "requested_action"

/**
 * Runs your workflow anytime the check_run event occurs. More than one activity type triggers this event. For information about the REST API, see https://developer.github.com/v3/checks/runs.
 */
export type CheckRun = {
    types?: CheckRunType[];
} 