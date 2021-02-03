export default interface IUserNameProps {
    name: string,
    id: string,
    changeName(name: string, id: string):void
}