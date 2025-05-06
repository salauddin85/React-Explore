import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function PostDetail() {
    const post = useLoaderData();

    const { id, title, body } = post
    let params = useParams()
    console.log(params.id);
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(-1)
    }
    return (
        <div className='border-2 border-red-500 rounded-2xl p-5'>
            <h1>PostId:{id}</h1>
            <h4>Title:{title}</h4>
            <p>Body:{body}</p>
            <button onClick={handleNavigate} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3" >Go Back</button>

        </div>
    )
}

export default PostDetail
