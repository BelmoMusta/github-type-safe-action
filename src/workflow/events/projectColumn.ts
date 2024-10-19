export type ProjectColumnType = "created" | "updated" | "moved" | "deleted"

/**
 * Runs your workflow anytime the project_column event occurs. More than one activity type triggers this event. For information about the REST API, see https://developer.github.com/v3/projects/columns.
 */
export type ProjectColumn = {
    types?: ProjectColumnType;
} 