import { React, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import useForm from '../hooks/useForm';

function Register() {

    const { userData, submitUser, handleForm, setError, error } = useForm()
    const user = useSelector(state => state.user)
    const navigate = useNavigate()

    // handling error message
    useEffect(() => {
        console.log(user);
        if (user.error === 'error') setError(user.msg)
        if (user.status === 'ok') navigate('../login')
    }, [user]);

    useEffect(() => {
        setError('')
    }, [userData]);

    return (
        <div className='app-container form-container'>
            <h1 className='title'>Create an Account</h1>
            <form onSubmit={submitUser} className='form'>
                <input type="text" name="firstName" placeholder='First Name' onChange={handleForm} value={userData.firstName} required />
                <input type="text" name="lastName" placeholder='Last Name' onChange={handleForm} value={userData.lastName} required />
                <input type="email" name="email" placeholder='Email' onChange={handleForm} value={userData.email} required />
                <input type='password' name="password" placeholder='Password' onChange={handleForm} value={userData.password} required />
                <button className='btn-primary'>CREATE ACCOUNT</button>
            </form>
            <p style={{ color: 'red', marginBottom: '.7em' }}>{error}</p>
            <p>Already Have an Account?<Link to="/login"> Sign In</Link></p>
        </div>
    );
}

export default Register;
