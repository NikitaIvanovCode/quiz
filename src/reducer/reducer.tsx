import { authUser, getUserProfile, changeName, exitProfile, addPost, subscribeToUser, unsubscribeFromUser, removePost, likePost, unlikePost, getSubsList } from './reducerFunc'
import { Actions } from '../types'
import { IState } from '../interfaces'

const reducer = (state: IState , action: Actions) => {
    switch(action.type){
        case 'AUTH_USER':
            return authUser(action.payload, state.users, state.posts)

        case 'GET_USER_PROFILE':
            return {
                ...state,
                userProfile: getUserProfile(action.payload, state.users, state.posts)
            }

        case 'CHANGE_NAME':
            return {
                ...state,
                userProfile: changeName(action.name, action.id, state.users, state.userProfile)
            }

        case 'EXIT_PROFILE':
            return exitProfile(state.users, state.posts)

        case 'SET_SHOW_FORM':
            return {
                ...state,
                showForm: true
            }

        case 'SET_CLOSE_FORM':
            return {
                ...state,
                showForm: false
            }

        case 'PUBLISH_POST':
            return addPost(action.payload, state.user, state.posts, state.users, state.userProfile, state.subs)

        case 'SUBSCRIBE_TO_USER':
            return subscribeToUser(action.payload, state.user, state.users, state.posts, state.userProfile, state.subs, state.backUserId)

        case 'UNSUBSCRIBE_FROM_USER':
            return unsubscribeFromUser(action.payload, state.user, state.users, state.posts, state.userProfile, state.subs, state.backUserId)

        case 'GET_SUBS':
            return {
                ...state,
                subs: getSubsList(action.id, action.subs, state.users),
                backUserId: state.userProfile.id
            }

        case 'REMOVE_POST':
            return removePost(action.payload, state.user, state.posts, state.users, state.userProfile, state.subs)

        case 'LIKE_POST':
            return {
                ...state,
                posts: likePost(action.payload, state.user, state.posts)
            }

        case 'UNLIKE_POST':
            return {
                ...state,
                posts: unlikePost(action.payload, state.user, state.posts)
            }

        case 'ROUTE_SUBS':
            return {
                ...state,
                postsSub: true
            }

        case 'ROUTE_POSTS':
            return {
                ...state,
                postsSub: false
            }

        default:
            return state
    }
}

export default reducer