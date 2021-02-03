import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { ISubList } from '../../interfaces'
import { userProfile } from '../../actions/actions'
import './subsList.css'

const SubsList: React.FC<ISubList> = ({subs, userProfile, backUserId}) => {
    const isSubs = subs.length > 0 ? true : false
    const history = useHistory()

    const profileRoute = (id: string) => {
        history.push(`${history.location.pathname}/${id}`)
        userProfile(id)
    }

    return (
        <>
            <Link to={`/user/${backUserId}`} onClick={()=>profileRoute(backUserId)}>Назад</Link>
            <ul className="subs-list">
                {isSubs ? 
                    subs.map(({id, name})=>{
                        return <li className="subs-list__item" key={id} onClick={()=>profileRoute(id)}>{name}</li>
                    })
                : <div>Список пуст</div>}
            </ul>
        </>
    )
}

const mapStateToProps = ({subs, backUserId}) => ({subs, backUserId})

const mapDispatchToProps = {userProfile}

export default connect(mapStateToProps, mapDispatchToProps)(SubsList)