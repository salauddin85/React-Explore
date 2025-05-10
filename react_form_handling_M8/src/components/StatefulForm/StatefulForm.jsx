import React from 'react'
import { useState } from 'react';

function StatefulForm() {
    const [name, setName] = useState('rojoni');
    const [email, setEmail] = useState(null);
    const [message, setMessage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(name, email, message);
        // Reset the form fields
        // setName(e.target.name.value);
        // setEmail(e.target.email.value);
        // setMessage(e.target.message.value);
        
    }
    // console.log(name, email, message);
    const handleNameChange = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    const handleMessageChange = (e) => {
        console.log(e.target.value);
        setMessage(e.target.value);
    }
    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold underline text-amber-600 mb-3">Simple Form</h1>
            <input type="text" placeholder="Name" name='name' onChange={handleNameChange} className="border border-gray-300 p-2 rounded" value={name} />
            <input type="email" placeholder="Email" name='email' onChange={handleEmailChange} className="border border-gray-300 p-2 rounded" value={email} />
            <textarea placeholder="Message" name='message' onChange={handleMessageChange} className="border border-gray-300 p-2 rounded" value={message} />
            <button className=" hover:bg-red-600 text-white p-2 rounded">Submit</button>
        </form>
    )
}
export default StatefulForm;
