export default interface IPostUserName {
    userId: string, 
    name: string, 
    userProfile(id: string):void
}