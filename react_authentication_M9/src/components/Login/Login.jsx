import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { SignInWithPopup } from 'firebase/auth';
import auth from '../../firebase/firebase.js';
import { useState } from 'react';
const Login = () => {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const handleGoogleSignIn = () => {
        console.log('Google Sign In');
        // Sign in logic here
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                setUser(user);
                console.log(user);
            }).catch((error) => {
                // Handle Errors here.
                setUser(null);
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }
    const handleSignOut = () => {
        auth.signOut()
            .then(() => {
                // Sign-out successful.
                console.log('Sign-out successful.');
                setUser(null);
            }).catch((error) => {
                // An error happened.
                console.log('An error happened.', error);
            });
    }
    return (
        <div>
            <button className='bg-sky-400 m-5 px-5 py-3 rounded border border-amber-950' onClick={handleGoogleSignIn} >Login</button>
            <button className='bg-red-400 m-5 px-5 py-3 rounded border border-amber-950' onClick={handleSignOut} >Logout</button>

            {user && (
                <div>
                    <h1 className='text-3xl font-bold'>Welcome, {user.displayName}</h1>
                    <img src={user.photoURL} alt={user.displayName} />
                </div>
            )}
        </div>
    );
};

export default Login;