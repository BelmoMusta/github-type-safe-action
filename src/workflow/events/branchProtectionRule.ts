export type BranchProtectionType = ["created" | "edited" | "deleted", ...("created" | "edited" | "deleted")[]];
/**
 * Runs your workflow anytime the branch_protection_rule event occurs. More than one activity type triggers this event.
 */
export type BranchProtectionRule = {
    types?: BranchProtectionType[];
}