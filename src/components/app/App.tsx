import React, { useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { IAppProps } from '../../interfaces'
import Auth from '../auth/Auth'
import Posts from '../posts/Posts'
import Profile from '../profile/Profile'
import SubsList from '../subsList/SubsList'
import './app.css'

const App: React.FC<IAppProps> = ({user}) => {
    const history = useHistory()

    useEffect(()=>{
        if(!user){
            history.push('/')
        }
    },[user])

    if(!user) return <div className="app"><Auth /></div>
    return (
        <div className="app">
            <Switch>
                <Route path="/" component={Posts} exact />
                <Route path="/subscribtions" component={Posts} />
                <Route path="/user/:id" component={Profile} exact />
                <Route path="/user/:id/:subs" component={SubsList} exact/>
                <Route path="/user/:id/:subs/:id" component={Profile} />
            </Switch>
        </div>
    )
}

const mapStateToProps = ({user}) => ({ user })

export default connect(mapStateToProps)(App)