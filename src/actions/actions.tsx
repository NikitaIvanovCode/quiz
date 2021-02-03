import { TAuthUser, TUserProfile, TChangeName, TExitProfile, TSetShowForm, TSetCloseForm, TPublishPost, TSubscribeToUser, TUnsubscribeFromUser, TRemovePost, TLikePost, TUnlikePost, TRouteSubs, TRoutePosts, TGetSubscribList } from '../types'

export const authUser = (name: string): TAuthUser => ({type: 'AUTH_USER', payload: name})

export const userProfile = (id: string): TUserProfile => ({type: 'GET_USER_PROFILE', payload: id})

export const changeName = (name: string, id: string): TChangeName => ({type: 'CHANGE_NAME', name, id})

export const exitProfile = (): TExitProfile => ({type: 'EXIT_PROFILE'})

export const setShowForm = (): TSetShowForm => ({type: 'SET_SHOW_FORM'})

export const setCloseForm = (): TSetCloseForm => ({type: 'SET_CLOSE_FORM'})

export const publishPost = (text: string): TPublishPost => ({type: 'PUBLISH_POST', payload: text})

export const subscribeToUser = (id: string): TSubscribeToUser => ({type: 'SUBSCRIBE_TO_USER', payload: id}) 

export const unsubscribeFromUser = (id: string): TUnsubscribeFromUser => ({type: 'UNSUBSCRIBE_FROM_USER', payload: id})

export const getSubscribList = (id: string, subs: string): TGetSubscribList => ({type: 'GET_SUBS', id, subs})

export const removePost = (id: string): TRemovePost => ({type: 'REMOVE_POST', payload: id})

export const likePost = (id: string): TLikePost => ({type: 'LIKE_POST', payload: id})

export const unlikePost = (id: string): TUnlikePost => ({type: 'UNLIKE_POST', payload: id})

export const routeSubs = (): TRouteSubs => ({type: 'ROUTE_SUBS'})

export const routePosts = (): TRoutePosts => ({type: 'ROUTE_POSTS'})
