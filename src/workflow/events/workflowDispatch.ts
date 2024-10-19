export interface Input {
    [index: string]: {
        type?: 'string' | 'number' | 'environment' | 'boolean'
        required?: boolean | false;
        default?: string;
        deprecationMessage?: string;
        description?: string;
    };
}

export interface ChoiceInput {
    [index: string]: {
        type?: 'choice'
        options?: string[]
        required?: boolean | false;
        default?: string;
        deprecationMessage?: string;
        description?: string;
    };
}

export type WorkflowDispatch = {
    /**
     * Input parameters allow you to specify data that the action expects to use during runtime. GitHub stores input parameters as environment variables. Input ids with uppercase letters are converted to lowercase during runtime. We recommended using lowercase input ids.
     */
    inputs?: Input | ChoiceInput
}