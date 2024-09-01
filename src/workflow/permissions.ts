import {PermissionsEvent} from "./permissionsEvent";

/**
 * You can modify the default permissions granted to the GITHUB_TOKEN, adding or removing access as required, so that you only allow the minimum required access.
 */
export type Permissions = ("read-all" | "write-all") | PermissionsEvent;