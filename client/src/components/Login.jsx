import React from 'react';
import { Link } from 'react-router-dom'
import useForm from '../hooks/useForm'

function Login() {

    const { userData, handleForm, handleLogin } = useForm()

    return (
        <div className='app-container form-container'>
            <h1 className='title'>SIGN IN</h1>
            <form className='form'>
                <input type="email" name="email" placeholder='Email' onChange={handleForm} value={userData.email} required />
                <input type='password' name="password" placeholder='Password' onChange={handleForm} value={userData.password} required />
                <button onClick={handleLogin}>SIGN IN</button>
            </form>
            <p>New Account?<Link to="/register"> Register</Link></p>
        </div>
    )
}

export default Login;
