import React from 'react'
import { useLoaderData } from 'react-router-dom'

function UserDetails() {
    const userDetail = useLoaderData();
    // console.log(userDetail)
    const { id, name, email } = userDetail
    return (
        <div className='p-5 border-2 border-red-500 rounded-2xl shadow-2xl'>
            <h6>Hello world from UserDetails page</h6>
            <h6>User Id: {id}</h6>
            <h4>Name: {name}</h4>
            <h4>Email: {email}</h4>
        </div>
    )
}

export default UserDetails
