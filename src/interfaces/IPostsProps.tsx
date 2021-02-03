import IPost from './IPost'
import IUser from './IUser'

export default interface IPostsProps {
    user: string,
    userProfile(id: string):void,
    posts: Array<IPost>,
    users: Array<IUser>,
    postsSub: boolean,
    routeSubs():void,
    routePosts():void
}