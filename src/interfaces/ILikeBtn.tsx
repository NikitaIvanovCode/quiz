export default interface ILikeBtn {
    id: string, 
    setLikesState(likesState: string[]):void, 
    likesState: string[], 
    user: string, 
    likePost(id: string):void, 
    unlikePost(id: string):void
}