import React from 'react'
import { connect } from 'react-redux'
import { ILikesListProps } from '../../interfaces'
import PostUserName from '../postUserName/PostUserName'
import './likesList.css'

const LikesList: React.FC<ILikesListProps> = ({likes, users}) => {
    const likesArr = []
    likes.map(userId => {
        users.filter(({id, name}) => { 
            if(id===userId) likesArr.push({id, name}) 
        })
    })

    return (
        <ul className="likes-list-users">
            {likesArr.map(({id, name})=>{
                return (
                    <li key={id} className="likes-list-users__item">
                        &nbsp;<PostUserName userId={id} name={name}/>
                    </li>
                )
            })}
        </ul>
    )
}

const mapStateToProps = ({users}) => ({ users })

export default connect(mapStateToProps)(LikesList)