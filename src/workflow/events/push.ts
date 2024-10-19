import {HasBranches} from "./branch";
import {HasPaths} from "./path";
import {HasTags} from "./tag";

/**
 * Runs your workflow when someone pushes to a repository branch, which triggers the push event.
 * Note: The webhook payload available to GitHub Actions does not include the added, removed, and modified attributes in the commit object. You can retrieve the full commit object using the REST API. For more information, see https://developer.github.com/v3/repos/commits/#get-a-single-commit.
 */
export type Push = HasPaths & HasBranches & HasTags