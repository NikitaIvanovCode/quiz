import IUser from './IUser'

export default interface ILikesListProps {
    likes: string[],
    users: Array<IUser>
}