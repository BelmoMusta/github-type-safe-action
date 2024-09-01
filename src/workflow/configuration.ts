export type Configuration =
    | string
    | number
    | boolean
    | {
    [k: string]: Configuration;
}
    | Configuration[];