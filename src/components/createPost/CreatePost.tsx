import React from 'react'
import { connect } from 'react-redux'
import { setShowForm } from '../../actions/actions'
import { ICreatePostProps } from '../../interfaces'
import CreatePostForm from '../createPostForm/CreatePostForm'

const CreatePost: React.FC<ICreatePostProps> = ({setShowForm, showForm}) => {
    return (
        <>
            <button onClick={()=>setShowForm()}>+</button>
            {showForm ? <CreatePostForm /> : null}
        </>
    )
}

const mapStateToProps = ({showForm}) => ({ showForm })

const mapDispatchToProps = {setShowForm}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)