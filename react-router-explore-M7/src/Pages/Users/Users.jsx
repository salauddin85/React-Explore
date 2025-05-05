import React from 'react'
import {useLoaderData} from 'react-router-dom'
import User from '../Users/User/User'

function Users() {
    const users = useLoaderData();
    console.log(users)
    return (
        <div >
            {/* <h1>Our users: {users.length}</h1> */}
            <div className='grid grid-cols-3 gap-6 p-4'>
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
            </div>
        </div>
    )
}

export default Users
