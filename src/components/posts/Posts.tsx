import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { IPostsProps, IPost } from '../../interfaces'
import { userProfile, routeSubs, routePosts } from '../../actions/actions'
import PostsList from '../postsList/PostsList'
import './posts.css'

const Posts: React.FC<IPostsProps> = ({user, userProfile, posts, users, postsSub, routeSubs, routePosts }) => {
    const [showPosts, setShowPosts] = useState<Array<IPost>>([])
    const [classActivePosts, setClassActivePosts] = useState<string>('posts-head__btn-active')
    const [classActiveSubs, setClassActiveSubs] = useState<string>('')

    useEffect(()=>{
        if(postsSub) return getSubPosts()
        setShowPosts(posts)
    },[posts, postsSub])

    const history = useHistory()
    const profileRoute = () => {
        history.push(`/user/${user}`)
        userProfile(user)
    }

    const allPosts = () => {
        history.push(`/`)
        setShowPosts(posts)
        routePosts()
        setClassActivePosts('posts-head__btn-active')
        setClassActiveSubs('')
    }

    const getSubPosts = () => {
        if(!postsSub) routeSubs()
        setClassActivePosts('')
        setClassActiveSubs('posts-head__btn-active')
        history.push(`/subscribtions`)
        const idx = users.findIndex(item => item.id === user)
        const subns = users[idx].subscribtions
        const subPosts = []
        posts.map(post => subns.filter(item => {
                if(post.userId === item) subPosts.push(post)
            })
        )
        setShowPosts(subPosts)
    }

    return (
        <>
            <div className="posts-head">
                <button className={classActivePosts} onClick={allPosts}>Все посты</button>
                <button className={classActiveSubs}  onClick={getSubPosts}>Подписки</button>
                <button onClick={profileRoute}>В профиль</button>
            </div>
            <PostsList posts={showPosts} />
        </>
    )
}

const mapStateToProps = ({user, posts, users, postsSub}) =>  ({user, posts, users, postsSub})

const mapDispatchToProps = { userProfile, routeSubs, routePosts }

export default connect(mapStateToProps, mapDispatchToProps)(Posts)