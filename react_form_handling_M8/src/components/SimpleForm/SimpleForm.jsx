

import React from 'react'

function SimpleForm() {
    return (
        <form className="flex flex-col gap-4" onSubmit={(e) => { console.log(e.target.name.value, e.target.email.value, e.target.message.value); e.preventDefault(); }}>
            <h1 className="text-3xl font-bold underline text-amber-600 mb-3">Simple Form</h1>
            <input type="text" placeholder="Name" name='name' className="border border-gray-300 p-2 rounded" />
            <input type="email" placeholder="Email" name='email' className="border border-gray-300 p-2 rounded" />
            <textarea placeholder="Message" name='message' className="border border-gray-300 p-2 rounded" />
            <button className=" hover:bg-red-600 text-white p-2 rounded">Submit</button>
        </form>
    )
}

export default SimpleForm;
