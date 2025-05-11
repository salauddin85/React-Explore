import React from 'react';
import useInputState from '../../hooks/UseInputState';

const HookForm = () => {
    // const [name,handleNameChange] = useInputState('');
    const emailState = useInputState('ss@gmail.com');
    // const [email,handleEmailChange] = useInputState('');
    // const [password,handlePasswordChange] = useInputState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target.name.value);
        console.log(e.target.email.value);
        // console.log(e.target.password.value);
        // Handle form submission
    }

    return (
        <div>
            <h2>HookForm</h2>
            <form onSubmit={handleSubmit}>
                {/* <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" onChange={handleNameChange} />
                </div> */}
           
                <div>
                    {/* <label htmlFor="email">Email:</label> */}
                    <input {...emailState} type="email" id="email" name="email" />
                </div>
                {/* <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" onChange={handlePasswordChange} />
                </div> */}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default HookForm;