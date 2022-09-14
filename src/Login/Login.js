import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (e) => {
        e.preventDefault();
    };

    const register = (e) => {
        e.preventDefault();
    };

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className='login__logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt=''
                />
            </Link>
            <div className='login__container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} type='text' onChange={(e) => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input value={password} type='password' onChange={(e) => setPassword(e.target.password)} />
                    <button type='submit' onClick={signIn} className='login__signInButton'>
                        {" "}
                        Sign In
                    </button>
                </form>
                <p>
                    By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies
                    Notice and our Interest-Based ads Notice.
                </p>
                <button onClick={register} className='login__registerButton'>
                    Create your Amazon account
                </button>
            </div>
        </div>
    );
}

export default Login;
