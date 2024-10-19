export type Tag = string | string[] | [];

export type HasTags = {
    tags?: Tag;
    'tags-ignore'?: Tag;
}