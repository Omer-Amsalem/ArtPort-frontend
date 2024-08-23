import React from "react";
import "./SignIn.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="wrapper">
        <form className="form-signin">
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder="User name" required />
                <FaUser className="icon"/>
            </div>
            <div className="input-box">
                <input type="password" placeholder="Password" required />
                <FaLock className="icon"/>
            </div>
            <div className="remember-forgot">
                <label>
                    <input type="checkbox" /> Remember me
                </label>
                <a href="#">Forgot password?</a>
            </div>
            <button type="submit">Login</button>
            <div className="register-link">
            <p>Don't have an account? <Link to="/signup">Sign Up</Link> </p>
            </div>
        </form>
    </div>
  );
}

export default SignIn;