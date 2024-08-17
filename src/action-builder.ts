export type OptionalString = string | undefined;
export type InputType = {
    name: string;
    description?: string;
    defaultValue?: string;
    required: boolean;
}

export type OutputType = {
    name: string;
    description?: string;
    defaultValue?: string;
    required: boolean;
    value?: string;
}


export class Runs {
    private using: string;
    private main: string;
}

export class Action {
    private name: string;
    private description: OptionalString;
    private inputs_: InputType[];
    private outputs_: OutputType[];
    private runs_: Runs;

    constructor() {
        this.inputs_ = [];
        this.outputs_ = [];
    }

    public setName(name: string) {
        this.name = name;
        return this;
    }

    setDescription(description: string) {
        this.description = description;
        return this;
    }

    addInput(input: InputType) {
        this.inputs_.push(input);
        return this;
    }

    addOutput(output: OutputType) {
        this.outputs_.push(output);
        return this;
    }

    runs(runs: Runs): Action {
        this.runs_ = runs;
        return this;
    }
}

export class ActionBuilder {
    private action: Action;

    constructor() {
        this.action = new Action();
    }

    name(name: string) {
        this.action.setName(name);
        return this;
    }

    description(description: string) {
        this.action.setDescription(description);
        return this;
    }

    inputs(...inputs: InputType[]) {
        for (let input of inputs) {
            this.action.addInput(input);
        }
        return this;
    }

    outputs(...inputs: OutputType[]) {
        for (let input of inputs) {
            this.action.addInput(input);
        }
        return this;
    }

    build(): Action {
        return this.action;
    }
}
