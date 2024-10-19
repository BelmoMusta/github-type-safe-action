export type ReleaseTypes =
    "published" | "unpublished" | "created" | "edited" | "deleted" | "prereleased" | "released";
/**
 * Runs your workflow anytime the release event occurs. More than one activity type triggers this event. For information about the REST API, see https://developer.github.com/v3/repos/releases/ in the GitHub Developer documentation.
 */
export type Release = {
    types?: ReleaseTypes[];
} 