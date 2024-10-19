import {JobNeeds} from "./jobNeeds";
import {Permissions} from "./events/permissions";
import {Secrets} from "./secrets";
import {Matrix} from "./matrix";
import {Concurrency} from "./concurrency";

/**
 * Each job must have an id to associate with the job. The key job_id is a string and its value is a map of the job's configuration data. You must replace <job_id> with a string that is unique to the jobs object. The <job_id> must start with a letter or _ and contain only alphanumeric characters, -, or _.
 */
export interface ReusableWorkflowCallJob {
    /**
     * The name of the job displayed on GitHub.
     */
    name?: string;
    needs?: JobNeeds;
    permissions?: Permissions;
    /**
     * You can use the if conditional to prevent a job from running unless a condition is met. You can use any supported context and expression to create a conditional.
     * Expressions in an if conditional do not require the ${{ }} syntax. For more information, see https://help.github.com/en/articles/contexts-and-expression-syntax-for-github-actions.
     */
    if?: boolean | number | string;
    /**
     * The location and version of a reusable workflow file to run as a job, of the form './{path/to}/{localfile}.yml' or '{owner}/{repo}/{path}/{filename}@{ref}'. {ref} can be a SHA, a release tag, or a branch name. Using the commit SHA is the safest for stability and security.
     */
    uses: string;
    /**
     * A map of inputs that are passed to the called workflow. Any inputs that you pass must match the input specifications defined in the called workflow. Unlike 'jobs.<job_id>.steps[*].with', the inputs you pass with 'jobs.<job_id>.with' are not be available as environment variables in the called workflow. Instead, you can reference the inputs by using the inputs context.
     */
    with?:
        | {
        [k: string]: string | number | boolean;
    }
        | string;
    /**
     * When a job is used to call a reusable workflow, you can use 'secrets' to provide a map of secrets that are passed to the called workflow. Any secrets that you pass must match the names defined in the called workflow.
     */
    secrets?: Secrets | "inherit";
    /**
     * A strategy creates a build matrix for your jobs. You can define different variations of an environment to run each job in.
     */
    strategy?: {
        matrix: Matrix;
        /**
         * When set to true, GitHub cancels all in-progress jobs if any matrix job fails. Default: true
         */
        "fail-fast"?: boolean | string;
        /**
         * The maximum number of jobs that can run simultaneously when using a matrix job strategy. By default, GitHub will maximize the number of jobs run in parallel depending on the available runners on GitHub-hosted virtual machines.
         */
        "max-parallel"?: number | string;
    };
    /**
     * Concurrency ensures that only a single job or workflow using the same concurrency group will run at a time. A concurrency group can be any string or expression. The expression can use any context except for the secrets context.
     * You can also specify concurrency at the workflow level.
     * When a concurrent job or workflow is queued, if another job or workflow using the same concurrency group in the repository is in progress, the queued job or workflow will be pending. Any previously pending job or workflow in the concurrency group will be canceled. To also cancel any currently running job or workflow in the same concurrency group, specify cancel-in-progress: true.
     */
    concurrency?: string | Concurrency;
}