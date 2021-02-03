import IGetSubFunc from './IGetSubFunc'

export default interface ISubList {
    subs: Array<IGetSubFunc>,
    userProfile(id: string):void,
    backUserId: string
}