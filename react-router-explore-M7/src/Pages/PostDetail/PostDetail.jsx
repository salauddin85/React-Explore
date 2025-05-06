import React from 'react'
import { useLoaderData } from 'react-router-dom'

function PostDetail() {
    const post = useLoaderData();
    const { id, title, body } = post
    return (
        <div className='border-2 border-red-500 rounded-2xl p-5'>
            <h1>PostId:{id}</h1>
            <h4>Title:{title}</h4>
            <p>Body:{body}</p>
        </div>
    )
}

export default PostDetail
