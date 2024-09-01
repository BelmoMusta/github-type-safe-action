import {StringContainingExpressionSyntax} from "./stringContainingExpressionSyntax";

/**
 * To set custom environment variables, you need to specify the variables in the workflow file. You can define environment variables for a step, job, or entire workflow using the jobs.<job_id>.steps[*].env, jobs.<job_id>.env, and env keywords. For more information, see https://docs.github.com/en/actions/learn-github-actions/workflow-syntax-for-github-actions#jobsjob_idstepsenv
 */
export type Env1 =
    | {
    [k: string]: string | number | boolean;
}
    | StringContainingExpressionSyntax;