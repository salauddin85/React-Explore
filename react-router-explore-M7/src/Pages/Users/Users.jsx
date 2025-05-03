import React from 'react'
import {useLoaderData} from 'react-router-dom'

function Users() {
    const users = useLoaderData();
    console.log(users)
    return (
        <div>
            <h1>Our users: {users.length}</h1>
        </div>
    )
}

export default Users
