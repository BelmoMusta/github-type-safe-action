import {Branch} from "./branch";
import {Path} from "./path";

/**
 * Runs your workflow when someone pushes to a repository branch, which triggers the push event.
 * Note: The webhook payload available to GitHub Actions does not include the added, removed, and modified attributes in the commit object. You can retrieve the full commit object using the REST API. For more information, see https://developer.github.com/v3/repos/commits/#get-a-single-commit.
 */
export type Push = {
    branches?: Branch;
    "branches-ignore"?: Branch;
    tags?: Branch;
    "tags-ignore"?: Branch;
    paths?: Path;
    "paths-ignore"?: Path;
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^(branche|tag|path)s(-ignore)?$".
     */
    [k: string]: string[] | any;
} & ({
    [k: string]: unknown;
} | null);