import React from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { userProfile } from '../../actions/actions'
import { IPostUserName } from '../../interfaces'
import './postUserName.css'

const PostUserName: React.FC<IPostUserName> = ({userId, name, userProfile}) => {
    const history = useHistory()

    const profileRoute = () => {
        history.push(`/user/${userId}`)
        userProfile(userId)
    }

    return <div className="name" onClick={profileRoute}>{name}</div>
}

const mapDispatchToProps = { userProfile }

export default connect(null, mapDispatchToProps)(PostUserName)