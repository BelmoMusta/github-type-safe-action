import {NormalJob} from "./normalJob";
import {ReusableWorkflowCallJob} from "./reusableWorkflowCallJob";

export type WorkflowJobs = {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[_a-zA-Z][a-zA-Z0-9_-]*$".
     */
    [k: string]: NormalJob | ReusableWorkflowCallJob;
};