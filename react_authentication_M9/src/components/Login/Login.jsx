import React from 'react';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';
const Login = () => {
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        console.log('Google Sign In');
    }
    return (
        <div>
            <button className='bg-sky-400 m-5 px-5 py-3 rounded border border-amber-950' onClick={handleGoogleSignIn} >Login</button>
        </div>
    );
};

export default Login;