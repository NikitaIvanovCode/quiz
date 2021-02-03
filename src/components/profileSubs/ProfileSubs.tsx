import React from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { IProfileSubsProps } from '../../interfaces'
import { getSubscribList } from '../../actions/actions'
import './profileSubs.css'

const ProfileSubs: React.FC<IProfileSubsProps> = ({subscribtions, subscribers, id, getSubscribList}) => {
    const history = useHistory()

    const toSubscrib = (subs) => {
        history.push(`/user/${id}/${subs}`)
        getSubscribList(id, subs)
    }

    return (
        <div className="profileSubs">
            <div onClick={()=>toSubscrib('subscribtions')}>{subscribtions} подписки,&nbsp;</div>
            <div onClick={()=>toSubscrib('subscribers')}>{subscribers} подписчиков</div>
        </div>
    )
}

const mapDispatchToProps = {getSubscribList}

export default connect(null, mapDispatchToProps)(ProfileSubs)