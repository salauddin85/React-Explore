import React from 'react'
import { Link } from 'react-router-dom';

function Post({post}) {
    const { id, title, body } = post
    return (
        <div className='border-2 border-red-500 rounded-2xl p-5'>
            <h1>PostId:{id}</h1>
            <h4>Title:{title}</h4>
            <p>Body:{body}</p>
            <Link to={`/posts/${id}`}><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3" >Details</button></Link>
        </div>
    )
}

export default Post
