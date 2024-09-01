import {Types17} from "./types17";

/**
 * Runs your workflow anytime a package is published or updated. For more information, see https://help.github.com/en/github/managing-packages-with-github-packages.
 */
export type RegistryPackage = {
    types?: Types17;
    [k: string]: unknown;
} & ({
    [k: string]: unknown;
} | null);