export default interface IProfileBtnProps {
    id: string,
    user: string,
    exitProfile():void,
    subscribers: string[],
    subscribeToUser(id: string):void,
    unsubscribeFromUser(id:string):void
}