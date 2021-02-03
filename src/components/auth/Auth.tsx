import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { IAuthUserProps } from '../../interfaces'
import { authUser } from '../../actions/actions'
import './auth.css'

const Auth: React.FC<IAuthUserProps> = ({authUser}) => {
    const [name, setName] = useState<string | ''>('')
    const [disBtn, setDisBtn] = useState<boolean>(true)

    useEffect(()=>{
        if(name.length > 3) setDisBtn(false)
        else setDisBtn(true)
    },[name])

    const formHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        authUser(name)
    }

    return (
        <form onSubmit={formHandler} className="auth-form">
            <div className="auth-form__inp">
                <input type="text" maxLength={12} placeholder="Введите имя" value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setName(e.target.value)}
                />
            </div>
            <button disabled={disBtn}>Продолжить</button>
        </form>
    )
}

const mapDispatchToProps = {
    authUser
}

export default connect(null,mapDispatchToProps)(Auth) 