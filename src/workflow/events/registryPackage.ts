export type RegistryPackageType = "published" | "updated";
/**
 * Runs your workflow anytime a package is published or updated. For more information, see https://help.github.com/en/github/managing-packages-with-github-packages.
 */
export type RegistryPackage = {
    types?: RegistryPackageType[];
} 