import React, { useState } from 'react'
import { connect } from 'react-redux'
import { IUserNameProps } from '../../interfaces'
import { changeName } from '../../actions/actions'
import './userName.css'

const UserName: React.FC<IUserNameProps> = ({name, id, changeName}) => {
    const [showInp, setShowInp] = useState<boolean>(false)
    const [inpName, setInpName] = useState<string | ''>('')

    const changeNameHandler = () => {
        if(inpName.length > 3) changeName(inpName, id)
        setInpName('')
        setShowInp(false)
    }

    return (
        <>
            {showInp ?
                <div>
                    <input className="change-name" type="text" placeholder="имя" value={inpName}
                        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setInpName(e.target.value)}
                    />
                    <button onClick={changeNameHandler}>Ок</button>
                </div>:
                <div onClick={()=>setShowInp(true)}>{name}</div>
            }
        </>
    )
}

const mapDispatchToProps = {changeName}

export default connect(null, mapDispatchToProps)(UserName)