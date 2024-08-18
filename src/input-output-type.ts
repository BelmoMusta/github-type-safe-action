export interface InputOutputType {
    name: string;
    description?: string;
}

export interface InputType extends InputOutputType {
    required: boolean;
    defaultValue?: string;
}

export interface OutputType extends InputOutputType {
    value?: string;
}