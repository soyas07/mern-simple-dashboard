import { React, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import useForm from '../hooks/useForm'

function Login() {

    const { userData, handleForm, handleLogin, setError, error, logout } = useForm()
    const user = useSelector(state => state.user)
    const navigate = useNavigate()

    // handling error message
    useEffect(() => {
        console.log(user);
        if (user.error === 'error') setError(user.msg)
        if (user.token) navigate('../dashboard')
    }, [user]);

    useEffect(() => {
        setError('')
    }, [userData]);

    return (
        <div className='app-container form-container'>
            <h1 className='title'>SIGN IN</h1>
            <form onSubmit={handleLogin} className='form'>
                <input type="email" name="email" placeholder='Email' onChange={handleForm} value={userData.email} required />
                <input type='password' name="password" placeholder='Password' onChange={handleForm} value={userData.password} required />
                <button className='btn-primary'>SIGN IN</button>
            </form>
            <p style={{ color: 'red', marginBottom: '.7em' }}>{error}</p>
            <p>New Account?<Link to="/register"> Register</Link></p>
        </div>
    )
}

export default Login;
