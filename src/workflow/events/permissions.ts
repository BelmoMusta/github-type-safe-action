export type PermissionsLevel = "read" | "write" | "none";

export interface PermissionsEvent {
    actions?: PermissionsLevel;
    attestations?: PermissionsLevel;
    checks?: PermissionsLevel;
    contents?: PermissionsLevel;
    deployments?: PermissionsLevel;
    discussions?: PermissionsLevel;
    "id-token"?: PermissionsLevel;
    issues?: PermissionsLevel;
    packages?: PermissionsLevel;
    pages?: PermissionsLevel;
    "pull-requests"?: PermissionsLevel;
    "repository-projects"?: PermissionsLevel;
    "security-events"?: PermissionsLevel;
    statuses?: PermissionsLevel;
}

/**
 * You can modify the default permissions granted to the GITHUB_TOKEN, adding or removing access as required, so that you only allow the minimum required access.
 */
export type Permissions = ("read-all" | "write-all") | PermissionsEvent;