import { v4 as uuidv4 } from 'uuid'
import { IState, IUser, IPost, IAuthUserFunc, IGetUserProfileFunc, ISubsItem } from '../interfaces'

const searchIdxUser = (id, users) => {
    const idx = users.findIndex(item => item.id === id)
    return idx 
}

export const authUser = (name: string, users: Array<IUser | null>, posts: Array<IPost | null>):IAuthUserFunc => {
    const idx = users.findIndex(item => item.name === name)
    if(idx < 0){
        const id = uuidv4()
        const newUser: IUser = {
            id,
            name,
            subscribtions: [],
            subscribers: [],
            posts: []
        }
        users = [...users, newUser]
        return { users, user: id, posts }
    }
    return { users, user: users[idx].id, posts }
}

export const getUserProfile = (id: string, users: Array<IUser>, posts: Array<IPost>):IGetUserProfileFunc => {
    const idx = searchIdxUser(id, users)
    const userPosts = posts.filter(item => item.userId === id)
    const userProfile = {...users[idx], posts: userPosts}
    return userProfile
}

export const changeName = (name: string, id: string, users: Array<IUser>, userProfile: IGetUserProfileFunc):IGetUserProfileFunc => {
    const isUserName = users.findIndex(item => item.name === name)
    if(isUserName < 0){
        const idx = searchIdxUser(id, users)
        users[idx].name = name
        userProfile = {...userProfile, name: name}
        return userProfile
    }
    return userProfile
}

export const exitProfile = (users: Array<IUser>, posts: Array<IPost>):IAuthUserFunc => {
    return { users, posts, user: null }
}

export const addPost = (text: string, user: string, posts: Array<IPost | null>, users: Array<IUser>, userProfile: IGetUserProfileFunc, subs: Array<ISubsItem>):IState => {
    const newPostId = uuidv4()
    const idx = searchIdxUser(user, users)
    users[idx].posts = [newPostId, ...users[idx].posts]
    const newPost: IPost = {
        id: newPostId,
        userId: user,
        text,
        likes: []
    }
    posts = [newPost, ...posts]
    userProfile = {...userProfile, posts: [newPost, ...userProfile.posts]}
    return { user, posts, users, userProfile, subs }
}

export const getSubsList = (id: string, subs: string, users: Array<IUser>):Array<ISubsItem> => {
    const idx = searchIdxUser(id, users)
    const subnsArr = users[idx][subs]
    const subsUser = [] 
    subnsArr.map(item => {
        users.filter(({id, name}) => {
            if(item === id) subsUser.push({id, name})
        })
    })
    return subsUser
}

export const subscribeToUser = (id: string, user: string, users: Array<IUser>, posts: Array<IPost>, userProfile: IGetUserProfileFunc, subs: Array<ISubsItem>, backUserId: string):IState => {
    const idxAuthUser = searchIdxUser(user, users)
    users[idxAuthUser].subscribtions.push(id)

    const idxUser = searchIdxUser(id, users)
    users[idxUser].subscribers.push(user)

    userProfile = {...userProfile, subscribers: [...users[idxUser].subscribers]}

    if(subs){
       subs = getSubsList(user, 'subscribtions', users)
    }

    return { user, users, posts, userProfile, subs, backUserId }
}

export const unsubscribeFromUser = (id: string, user: string, users: Array<IUser>, posts: Array<IPost>, userProfile: IGetUserProfileFunc, subs: Array<ISubsItem>, backUserId: string):IState  => {
    const idxAuthUser = searchIdxUser(user, users)
    const authUserSubns = users[idxAuthUser].subscribtions
    const subnsIdx = authUserSubns.findIndex(item=>item===id)
    users[idxAuthUser].subscribtions = [...authUserSubns.splice(0,subnsIdx), ...authUserSubns.splice(subnsIdx+1)]

    const idxUser = searchIdxUser(id, users)
    const userSubrs = users[idxUser].subscribers
    const subrsIdx = userSubrs.findIndex(item=>item===user)
    users[idxUser].subscribers = [...userSubrs.splice(0,subrsIdx), ...userSubrs.splice(subrsIdx+1)]

    userProfile = {...userProfile, subscribers: [...users[idxUser].subscribers]}

    if(subs){
        subs = getSubsList(user, 'subscribtions', users)
    }

    return { user, users, posts, userProfile, subs, backUserId }
}

export const removePost = (postId: string, user: string, posts: Array<IPost | null>, users: Array<IUser>, userProfile: IGetUserProfileFunc, subs: Array<ISubsItem>):IState => {
    const idx = searchIdxUser(user, users)
    const idxPost = posts.findIndex(item => item.id === postId)
    posts = [...posts.splice(0, idxPost), ...posts.splice(idxPost+1)]

    const newUserPostsusers = users[idx].posts.filter(item => {
        if(item !== postId) return item
    })
    users[idx].posts = newUserPostsusers 

    const newUserProfilePosts = userProfile.posts.filter(item => {
        if(item.id !== postId) return item
    })
    userProfile = {...userProfile, posts: newUserProfilePosts}
    return { user, posts, users, userProfile, subs }
}

export const likePost = (postId: string, user: string, posts: Array<IPost>):Array<IPost> => {
    const idxPost = posts.findIndex(({id}) => id === postId)
    posts[idxPost].likes = [...posts[idxPost].likes, user]
    return [...posts]
}

export const unlikePost = (postId: string, user: string, posts: Array<IPost>):Array<IPost> => {
    const idxPost = posts.findIndex(({id}) => id === postId)
    posts[idxPost].likes = posts[idxPost].likes.filter(item => {
        if(item !== user) return item
    })
    return [...posts]
}



