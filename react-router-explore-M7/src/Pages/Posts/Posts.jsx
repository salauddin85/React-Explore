import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Post from '../Post/Post'

function Posts() {
    const posts = useLoaderData();
    return (
        <div>
            <h1>Posts {posts.length}</h1>
            <div className='grid grid-cols-3 gap-6 p-4'>
            {
                posts.map(post => <Post post={post} key={post.id}></Post>)
            }
            </div>
        </div>
    )
}

export default Posts
