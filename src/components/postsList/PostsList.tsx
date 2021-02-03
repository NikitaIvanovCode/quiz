import React from 'react'
import { IPostsListProps } from '../../interfaces'
import Post from '../post/Post'
import './postsList.css'

const PostsList: React.FC<IPostsListProps> = ({posts}) => {
    const isPosts = posts.length > 0 ? true : false

    return (
        <ul className="posts-list">
            {isPosts ?
                posts.map(item => {
                    return <Post key={item.id} post={item} />
                })
            :<div>Нет постов</div>}
        </ul>
    )
}

export default PostsList