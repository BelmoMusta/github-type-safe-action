import {Shell} from "./shell";
import {WorkingDirectory} from "./workingDirectory";

/**
 * A map of default settings that will apply to all steps in the job.
 */
export interface Defaults1 {
    run?: {
        shell?: Shell;
        "working-directory"?: WorkingDirectory;
    };
}