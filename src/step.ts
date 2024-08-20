import {KeyValue} from "./key-value";

interface CommonStep {
    /**
     * The name of the composite run step.
     */
    name?: string;
    /**
     * A unique identifier for the step. You can use the `id` to reference the step in contexts.
     */
    id?: string;
    /**
     * You can use the if conditional to prevent a step from running unless a condition is met. You can use any supported context and expression to create a conditional.
     * Expressions in an if conditional do not require the ${{ }} syntax. For more information, see https://help.github.com/en/articles/contexts-and-expression-syntax-for-github-actions.
     */
    if?: string;
    /**
     * Sets a map of environment variables for only that step.
     */
    env?: KeyValue;
    /**
     * Prevents a job from failing when a step fails. Set to true to allow a job to pass when this step fails.
     */
    'continue-on-error'?: boolean;
    /**
     * Specifies the working directory where the command is run.
     */
    'working-directory'?: string;
}

export interface StepRunShell extends CommonStep {
    /**
     * The command you want to run. This can be inline or a script in your action repository.
     */
    run: string;
    /**
     * The shell where you want to run the command.
     */
    shell: "bash" |
        "pwsh" |
        "python" |
        "sh" |
        "cmd" |
        "powershell"

}

export interface StepUses extends CommonStep {
    /**
     * Selects an action to run as part of a step in your job.
     */
    uses: string
    /**
     * A map of the input parameters defined by the action. Each input parameter is a key/value pair.
     * Input parameters are set as environment variables.
     * The variable is prefixed with INPUT_ and converted to upper case.
     */
    with?: KeyValue;
}
