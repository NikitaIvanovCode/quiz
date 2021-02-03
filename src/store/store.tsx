import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducer/reducer'
import { save, load } from 'redux-localstorage-simple'
import { IState } from '../interfaces'

if(localStorage.getItem('redux_localstorage_simple') === null){
    const stateLS: IState = {
        users: [],
        posts: []
    }
    localStorage.setItem('redux_localstorage_simple', JSON.stringify(stateLS))
}

const createStoreWithMiddleware = applyMiddleware(save())(createStore)

const store = createStoreWithMiddleware(reducer, load()) 

export default store