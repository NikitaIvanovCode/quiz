import React from 'react'
import { connect } from 'react-redux'
import { IProfileBtnProps } from '../../interfaces'
import { exitProfile, subscribeToUser, unsubscribeFromUser } from '../../actions/actions'
import './profileBtn.css'

const ProfileBtn: React.FC<IProfileBtnProps> = ({id, user, exitProfile, subscribers, subscribeToUser, unsubscribeFromUser}) => {
    if(id === user) return <button className="prof-btn" onClick={exitProfile}>Выйти</button>

    if(subscribers.find(item=>item===user)) return <button className="prof-btn" onClick={()=>unsubscribeFromUser(id)}>Отписаться</button>
    else return <button className="prof-btn" onClick={()=>subscribeToUser(id)}>Подписаться</button>
}

const mapStateToProps = ({user}) => {
    return { user }
}

const mapDispatchToProps = {exitProfile, subscribeToUser, unsubscribeFromUser}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileBtn)