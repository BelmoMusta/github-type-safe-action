export interface Step {
    name?: string;
    id?: string;
    if?: string;
    post?: string;
    pre_if?: string;
    post_if?: string;
}

export interface RunsComposite {
    using: 'composite';

}