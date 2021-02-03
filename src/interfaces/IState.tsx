import IPost from './IPost'
import IUser from './IUser'
import IGetUserProfileFunc from './IGetUserProfileFunc'
import ISubsItem from './ISubsItem'

export default interface IState {
    users: Array<IUser>,
    posts: Array<IPost>,
    userProfile: IGetUserProfileFunc,
    user: string | null,
    subs?: Array<ISubsItem>,
    backUserId?: string
}