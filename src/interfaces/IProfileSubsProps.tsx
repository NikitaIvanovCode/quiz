export default interface IProfileSubsProps {
    subscribtions: number, 
    subscribers: number, 
    id: string,
    getSubscribList(id: string, subs: string):void
}