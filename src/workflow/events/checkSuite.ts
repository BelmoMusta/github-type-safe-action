export type CheckType = "completed";
/**
 * Runs your workflow anytime the check_suite event occurs. More than one activity type triggers this event. For information about the REST API, see https://developer.github.com/v3/checks/suites/.
 */
export type CheckSuite = {
    types?: CheckType[];
} 