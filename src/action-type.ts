import {InputType, OutputType} from "./input-output-type";
import {RunsComposite, RunsJavascript} from "./runs-type";
import {Branding} from "./branding-type";

export interface Action {
    name: string;
    author?: string;
    branding?: Branding;
    description?: string;
    inputs: InputType[];
    outputs: OutputType[];
    runs?: RunsJavascript | RunsComposite;
}