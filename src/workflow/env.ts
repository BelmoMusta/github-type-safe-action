import {StringContainingExpressionSyntax} from "./stringContainingExpressionSyntax";

export type Env = {
        [k: string]: string | number | boolean;
    }
    | StringContainingExpressionSyntax;