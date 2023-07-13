import ITag from "./tag";
import IThumbnail from "./thumbnail";

export default interface IPost {
    id?: string
    title: string
    slug: string,
    content: string
    description: string,
    thumbnail?: IThumbnail
    tags: ITag[]
    user_id: number
}