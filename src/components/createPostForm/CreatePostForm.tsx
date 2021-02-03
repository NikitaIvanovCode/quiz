import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setCloseForm, publishPost } from '../../actions/actions'
import { ICreatePostFormProps } from '../../interfaces'
import './createPostForm.css'

const CreatePostForm: React.FC<ICreatePostFormProps> = ({setCloseForm, publishPost}) => {
    const [text, setText] = useState<string | ''>('')

    const postFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(text) publishPost(text)
        setCloseForm()
    }

    return (
        <form className="create-form" onSubmit={postFormHandler}>
            <textarea className="create-form__textarea" maxLength={110} value={text}
                onChange={(e:React.ChangeEvent<HTMLTextAreaElement>)=>setText(e.target.value)}
            />
            <button>Опубликовать</button>
        </form>
    )
}

const mapDispatchToProps = {setCloseForm, publishPost}

export default connect(null, mapDispatchToProps)(CreatePostForm)