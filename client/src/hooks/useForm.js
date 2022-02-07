import { React, useState, useEffect } from 'react';
import { registerUser, loginUser } from '../action/user'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function useRegister() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.user)

    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });

    const [error, setError] = useState(false)

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
        if (user.status === 'ok') navigate('../login')
    }

    const handleLogin = e => {
        e.preventDefault()
        dispatch(loginUser(userData))
        // navigate('../dashboard')
    }

    const logout = () => {
        localStorage.removeItem('userToken')
        navigate('../')
        window.location.reload(true)
    }

    return { userData, setUserData, submitUser, handleForm, handleLogin, logout, error, setError }
}

export default useRegister;
