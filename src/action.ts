import {Inputs, Outputs} from "./input-output";
import {RunsComposite, RunsDocker, RunsJavascript} from "./runs";
import {Branding} from "./branding";

/**
 * https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions
 */
export interface Action {
    /**
     * The name of your action. GitHub displays the `name` in the Actions tab
     * to help visually identify actions in each job.
     */
    name: string;
    /**
     * The name of the action's author.
     */
    author?: string;
    /**
     * A short description of the action.
     */
    description?: string;

    /**
     * The execution of the action may be one of RunsJavascript, RunsComposite or RunsDocker.
     */
    runs: RunsJavascript | RunsComposite | RunsDocker;
    /**
     * You can use a color and Feather icon to create a badge to personalize and distinguish your action.
     * Badges are shown next to your action name in GitHub Marketplace.
     */
    branding?: Branding;
    /**
     * Input parameters allow you to specify data that the action expects to use during runtime.
     * GitHub stores input parameters as environment variables. Input ids with uppercase letters are converted
     * to lowercase during runtime. We recommended using lowercase input ids.
     */
    inputs?: Inputs;
    /**
     * Output parameters allow you to declare data that an action sets. Actions that run later in a workflow
     * can use the output data set in previously run actions. For example, if you had an action that performed
     * the addition of two inputs (x + y = z), the action could output the sum (z) for other actions to use as an input.
     * If you don't declare an output in your action metadata file, you can still set outputs and use them in a workflow.
     */
    outputs?: Outputs;
}