// import React from 'react'
// import { useState } from 'react';

// function StatefulForm() {
//     const [name, setName] = useState('rojoni');
//     const [email, setEmail] = useState(null);
//     const [message, setMessage] = useState(null);

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         console.log(name, email, message);
//         // Reset the form fields
//         // setName(e.target.name.value);
//         // setEmail(e.target.email.value);
//         // setMessage(e.target.message.value);
        
//     }
//     // console.log(name, email, message);
//     const handleNameChange = (e) => {
//         console.log(e.target.value);
//         setName(e.target.value);
//     }
//     const handleEmailChange = (e) => {
//         console.log(e.target.value);
//         setEmail(e.target.value);
//     }
//     const handleMessageChange = (e) => {
//         console.log(e.target.value);
//         setMessage(e.target.value);
//     }
//     return (
//         <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
//             <h1 className="text-3xl font-bold underline text-amber-600 mb-3">Simple Form</h1>
//             <input type="text" placeholder="Name" name='name' onChange={handleNameChange} className="border border-gray-300 p-2 rounded" value={name} />
//             <input type="email" placeholder="Email" name='email' onChange={handleEmailChange} className="border border-gray-300 p-2 rounded" value={email} />
//             <textarea placeholder="Message" name='message' onChange={handleMessageChange} className="border border-gray-300 p-2 rounded" value={message} />
//             <button className=" hover:bg-red-600 text-white p-2 rounded">Submit</button>
//         </form>
//     )
// }
// export default StatefulForm;



import React, { use } from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';

function StatefulForm() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);

    useEffect(() => {
        nameRef.current.focus();
        // nameRef.current.selectionStart = nameRef.current.value.length;
        // nameRef.current.selectionEnd = nameRef.current.value.length;

        
    }, []);
   
    useEffect(() => {
        emailRef.current.focus();
        // emailRef.current.selectionStart = emailRef.current.value.length;
        // emailRef.current.selectionEnd = emailRef.current.value.length;
    }, []);
    useEffect(() => {
        messageRef.current.focus();
        // messageRef.current.selectionStart = messageRef.current.value.length;
        // messageRef.current.selectionEnd = messageRef.current.value.length;
    }, []);

    

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(nameRef.current.value, emailRef.current.value, messageRef.current.value);
       
        
    }
    // console.log(name, email, message)
    return (
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold underline text-amber-600 mb-3">Simple Form</h1>
            <input type="text" placeholder="Name" name='name' ref={nameRef}  />
            <input type="email" placeholder="Email" name='email' ref={emailRef}  />
            <textarea placeholder="Message" name='message' ref={messageRef} />
            <button className=" hover:bg-red-600 text-white p-2 rounded">Submit</button>
        </form>
    )
}
export default StatefulForm;