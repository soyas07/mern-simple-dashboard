import Login from "./components/Login";
import Register from "./components/Register";
import Home from './components/Home'
import './css/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useSelector } from 'react-redux'
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
    const user = useSelector(state => state.dashboard)

    console.log(user);
    return (
        <BrowserRouter>
            <div className="app-container">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Register />} />
                    <Route path='dashboard' element={<Dashboard />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;
