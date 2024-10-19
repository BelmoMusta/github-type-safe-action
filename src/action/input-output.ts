/**
 * Input parameters allow you to specify data that the action expects to use during runtime.
 * GitHub stores input parameters as environment variables. Input ids with uppercase letters
 * are converted to lowercase during runtime. We recommended using lowercase input ids.
 */
export interface Inputs {
    [index: string]: {
        required?: boolean | false;
        default?: string;
        deprecationMessage?: string;
        description?: string;
    };
}

/**
 * Output parameters allow you to declare data that an action sets. Actions that run later in a workflow
 * can use the output data set in previously run actions. For example, if you had an action that performed
 * the addition of two inputs (x + y = z), the action could output the sum (z) for other actions to use as an input.
 * If you don't declare an output in your action metadata file, you can still set outputs and use them in a workflow.
 */
export interface Outputs {
    [index: string]: {
        value?: string;
        description?: string;
    };
}
