import {Shell} from "./shell";
import {WorkingDirectory} from "./workingDirectory";

/**
 * A map of default settings that will apply to all jobs in the workflow.
 */
export interface Defaults {
    run?: {
        shell?: Shell;
        "working-directory"?: WorkingDirectory;
    };
}