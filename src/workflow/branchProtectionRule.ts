import {Types} from "./types";

/**
 * Runs your workflow anytime the branch_protection_rule event occurs. More than one activity type triggers this event.
 */
export type BranchProtectionRule = {
    types?: Types;
    [k: string]: unknown;
} & ({
    [k: string]: unknown;
} | null);