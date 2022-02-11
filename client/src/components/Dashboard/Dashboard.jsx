import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDashboard } from '../../action/dashboard'
import { decodeToken } from 'react-jwt'

import Header from './Header';
import Main from './Main';
import SideNav from './SideNav';
import { Link } from 'react-router-dom';

import skateBg from '../../assets/skate-bg.jpg'
import loader from '../../assets/loader.svg'

function Dashboard() {

    const dispatch = useDispatch()
    const dashboard = useSelector(state => state.dashboard)
    const user = useSelector(state => state.user)
    
    useEffect(() => {
        const token = localStorage.getItem('userToken')
        if (token) {
            const user = decodeToken(token)
            if (user) {
                dispatch(getDashboard())
            }
        } 
    }, []);

    if (dashboard.status === 'ok') {
        
        return (
            <section className='dashboard-container'>
                <Header />
                <Main />
                <SideNav />
            </section>
        )
    
    } else if (user.isLoading || dashboard.isLoading) {
        return <div><img src={loader} alt="" /></div>
    }
    
    return <Link to="/login"><button className='btn-primary'>Login</button></Link>
    
    
}

export default Dashboard;
