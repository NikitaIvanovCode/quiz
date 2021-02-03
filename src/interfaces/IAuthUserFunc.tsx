import IUser from './IUser'
import IPost from './IPost'

export default interface IAuthUserFunc {
    users:Array<IUser>,
    user: string,
    posts: Array<IPost| null>,
}