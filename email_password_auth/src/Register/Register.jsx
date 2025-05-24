import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import auth from "../firebase/Firebase";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [terms, setTerms] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    const email = event.target.email.value;
    const password = event.target.password.value;
    // password validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      setSuccess(false);
      return;
    }
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;
    if (!regex.test(password)) {
      setError(
        "Password must contain at least one special character, one uppercase letter, one lowercase letter, and one number"
      );
      setSuccess(false);
      return;
    }
    if (!terms) {
      setError("You must accept the terms and conditions");
      setSuccess(false);
      setTerms(false);
      return;
    }
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
          <div className="card-body relative">
            <form onSubmit={handleSubmit}>
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                className="input"
                placeholder="Password"
              />
              {passwordVisible ? (
                <FaEyeSlash
                  className="absolute right-12 top-29 cursor-pointer"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                />
              ) : (
                <FaEye
                  className="absolute right-12 top-29 cursor-pointer"
                  onClick={() => setPasswordVisible(!passwordVisible)}
                />
              )}

              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              
                <label className="label">
                  <input
                    type="checkbox"
                    className="checkbox"
                    onClick={() => setTerms(!terms)}
                    checked={terms}
                  />
                  Terms and conditions
                </label>
           
              <button className="btn btn-neutral mt-16">Register</button>
            </form>
          </div>
          <div className="card-body">
            {error && <p className="text-red-500">{error}</p>}
            {success && (
              <p className="text-green-500">User created successfully!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
