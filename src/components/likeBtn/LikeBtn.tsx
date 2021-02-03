import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { likePost, unlikePost } from '../../actions/actions'
import { ILikeBtn } from '../../interfaces'

const LikeBtn: React.FC<ILikeBtn> = ({id, setLikesState, likesState, user, likePost, unlikePost}) => {
    const [likeBtn, setLikeBtn] = useState<boolean>(true)

    useEffect(()=>{
        if(likesState.find(item=>item===user)) setLikeBtn(false)  
    },[])

    const likeHandler = (id: string):void => {
        setLikeBtn(false)
        likePost(id)
        setLikesState([user, ...likesState])
    }

    const unlikeHandler = (id: string):void => {
        setLikeBtn(true)
        const idx = likesState.findIndex(item => item === user)
        unlikePost(id)
        setLikesState([...likesState.splice(0, idx), ...likesState.splice(idx+1)])
    }

    return (
        <>
        {likeBtn ? 
            <button onClick={()=>likeHandler(id)}>like</button>:
            <button style={{color:'red'}} onClick={()=>unlikeHandler(id)}>unlike</button>
        }
        </>
    )
}

const mapStateToProps = ({users, user}) => ({ users, user })

const mapDispatchToProps = {  likePost, unlikePost }

export default connect(mapStateToProps, mapDispatchToProps)(LikeBtn)
