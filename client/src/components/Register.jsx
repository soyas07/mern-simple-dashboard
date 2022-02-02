import { React } from 'react';
import { Link } from 'react-router-dom'
import useForm from '../hooks/useForm';

function Register() {
 
    const { userData, submitUser, handleForm } = useForm()
    
    return (
        <div className='app-container form-container'>
            <h1 className='title'>Create an Account</h1>
            <form className='form'>
                <input type="text" name="firstName" placeholder='First Name' onChange={handleForm} value={userData.firstName} required />
                <input type="text" name="lastName" placeholder='Last Name' onChange={handleForm} value={userData.lastName} required />
                <input type="email" name="email" placeholder='Email' onChange={handleForm} value={userData.email} required />
                <input type='password' name="password" placeholder='Password' onChange={handleForm} value={userData.password} required />
                <button onClick={submitUser}>CREATE ACCOUNT</button>
            </form>
            <p>Already Have an Account?<Link to="/login"> Sign In</Link></p>
        </div>
    );
}

export default Register;
