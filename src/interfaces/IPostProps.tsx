import IPost from './IPost'
import IUser from './IUser'

export default interface IPostProps {
    post: IPost,
    users: Array<IUser>,
    user: string,
    removePost(id: string):void
}