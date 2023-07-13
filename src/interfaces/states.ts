import IUser from "@blog/domain/models/user";
import { ILoading } from "./loading";
import { IError } from "./error";
import ITag from "@blog/domain/models/tag";
import IPost from "@blog/domain/models/post";
import IThumbnail from "@blog/domain/models/thumbnail";

export interface IUserState {
    users?: IUser[]
    user?: IUser,
    loading?: ILoading,
    error?: IError
}

export interface ITagState {
    tags?: ITag[]
    tag?: ITag,
    loading?: ILoading,
    error?: IError
}

export interface IPostState {
    posts?: IPost[]
    post?: IPost,
    loading?: ILoading,
    error?: IError
}

export interface IThumbnailState {
    thumbnails?: IThumbnail[]
    thumbnail?: IThumbnail,
    loading?: ILoading,
    error?: IError
}