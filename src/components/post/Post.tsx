import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { IPostProps } from '../../interfaces'
import { removePost } from '../../actions/actions'
import LikesList from '../likesList/LikesList'
import PostUserName from '../postUserName/PostUserName'
import LikeBtn from '../likeBtn/LikeBtn'
import './post.css'

const Post: React.FC<IPostProps> = ({post, users, user, removePost}) => {
    const [removeBtn, setRemoveBtn] = useState<boolean>(false)
    const [likesState, setLikesState] = useState<string[]>(post.likes)
    const {id, userId, text} = post
    const userIsProf = users.find(({id}) => id === userId)
    const name = userIsProf.name

    useEffect(()=>{
        if(userId === user) setRemoveBtn(true)
    },[userId])

    return (
        <li className="post">
            <div className="post__head">
                <PostUserName userId={userId} name={name}/>
                <div>
                    {removeBtn ? <button onClick={()=>removePost(id)}>x</button> : null}
                    <LikeBtn setLikesState={setLikesState} likesState={likesState} id={id}/>
                </div>
            </div>
            <div className="post__text">{text}</div>
            <div className="post__likes">
                <span>Понравилось:</span>
                <LikesList likes={likesState}/>
            </div>
        </li>
    )
}

const mapStateToProps = ({users, user}) => ({ users, user })

const mapDispatchToProps = { removePost }

export default connect(mapStateToProps, mapDispatchToProps)(Post)