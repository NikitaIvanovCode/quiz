import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { IProfileProps } from '../../interfaces'
import UserName from '../userName/UserName'
import ProfileBtn from '../profileBtn/ProfileBtn'
import CreatePost from '../createPost/CreatePost'
import PostsList from '../postsList/PostsList'
import ProfileSubs from '../profileSubs/ProfileSubs'
import './profile.css'

const Profile: React.FC<IProfileProps> = ({userProfile, user}) => {
    const {id, name, subscribtions, subscribers, posts} = userProfile
    const history = useHistory()
    const [back, setBack] = useState<boolean>(false)
    const pathname = history.location.pathname.split('/')
    useEffect(()=>{
        if(pathname[3] === 'subscribtions' || pathname[3] === 'subscribers') setBack(true)
        else setBack(false)
    },[pathname[3]])

    return (
        <>
            <div className="profile-head">
                <UserName name={name} id={id}/>
                <ProfileSubs subscribtions={subscribtions.length}  subscribers={subscribers.length} id={id}/>
            </div>
            <div className="profile-route-block">
                <ProfileBtn id={id} subscribers={subscribers}/>
                {back ? 
                    <Link to={`${pathname.splice(0,4).join('/')}`}>Назад</Link> : 
                    <Link to="/">В ленту</Link>
                }
            </div>
            {user === id ? <CreatePost /> : null}
            <PostsList posts={posts}/>
        </>
    )
} 

const mapStateToProps = ({userProfile, user}) =>  ({ userProfile, user })

export default connect(mapStateToProps)(Profile)