import Login from "./components/Login";
import Register from "./components/Register";
import './css/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useSelector } from 'react-redux'

function App() {
    const user = useSelector(state => state.user)

    console.log(user);
    return(
        <BrowserRouter>
            <div className="app-container">
                <Routes>
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Register />} />
                </Routes>
            </div>
        </BrowserRouter>
        )
}

export default App;
