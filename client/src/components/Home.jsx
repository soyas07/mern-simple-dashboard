import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="form-container">
            <Link to="/login"><button className='btn-primary'>Login</button></Link>
            <Link to="/register"><button className='btn-primary'>Register</button></Link>
        </div>
    )
}

export default Home;
