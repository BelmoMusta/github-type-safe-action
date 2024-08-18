export interface RunsJavascript {
    using: string;
    main: string;
    pre?: string;
    post?: string;
    pre_if?: string;
    post_if?: string;
}

export interface RunsComposite {
    using: 'composite';

}