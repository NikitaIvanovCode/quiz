import IPost from './IPost'

export default interface IGetUserProfileFunc {
    id: string,
    name: string,
    subscribtions: string[],
    subscribers: string[],
    posts: Array<IPost | null>
}