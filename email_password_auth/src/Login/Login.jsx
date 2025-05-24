import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import auth from "../firebase/Firebase";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    // Reset states
    setError("");
    setSuccess(false);

    // Firebase login
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Login successful:", user);
        setSuccess(true);
      })
      .catch((error) => {
        console.error("Login failed:", error.code, error.message);
        setError(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" required />

              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" required />

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>

              <button className="btn btn-neutral mt-4">Login</button>
            </form>

            {error && (
              <div className="alert alert-error mt-4">
                <p>{error}</p>
              </div>
            )}

            {success && (
              <div className="alert alert-success mt-4">
                <p>Login successful</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
