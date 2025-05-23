import { createUserWithEmailAndPassword } from "firebase/auth";
import  { useState } from "react";
import auth from "../firebase/Firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setError("");
        setSuccess(true);
        setEmail(user.email);
        setPassword(user.password);
        console.log(user);
        // ...
      })
      .catch((error) => {
        console.log("Error", error);
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        setSuccess(false);
        console.log(errorCode, errorMessage);
        // ..
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
              <input type="email" name="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
            </form>
          </div>
          <div className="card-body">
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">User created successfully!</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
