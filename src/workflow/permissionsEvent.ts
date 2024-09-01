import {PermissionsLevel} from "./permissionsLevel";

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