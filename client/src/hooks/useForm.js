import { React, useState } from 'react';
import { registerUser, loginUser } from '../action/user'
import {  useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function useRegister() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    // handle form inputs 
    const handleForm = e => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
    }

    const submitUser = e => {
        e.preventDefault()
        dispatch(registerUser(userData))
        navigate('../login')
    }

    const handleLogin = e => {
        e.preventDefault()
        dispatch(loginUser(userData))
        navigate('../dashboard')
    }

    return { userData, setUserData, submitUser, handleForm, handleLogin }
}

export default useRegister;
