import React from 'react';
import { IoIosArrowDown } from 'react-icons/io'
import { HiBell } from 'react-icons/hi'
import { VscCircleFilled } from 'react-icons/vsc'
import useForm from '../../hooks/useForm'
import pic from '../../assets/download.png'
import { useSelector } from 'react-redux';
import useDashboard from '../../hooks/useDashboard';

function SideNav() {

  const { logout } = useForm()
  const state = useSelector(state => state.user)
  const { setEnabledLogout, isEnabledLogout } = useDashboard()

  console.log(state);

  return (
    <nav id="side-nav-container">
      <div className="profile-header">
        <div className="left-content">
          <img src={pic} alt="display picture" id="profile-pic" />
          <p>{localStorage.getItem('username')}</p>
          <span id="down-arrow"><IoIosArrowDown onClick={() => setEnabledLogout(!isEnabledLogout)} />
            <div className={isEnabledLogout ? 'dropdown-logout active-logout' : 'dropdown-logout'}>
             <button className='btn-primary' onClick={logout}>logout</button>
            </div>
          </span>
          
        </div>
        
        <span id="notify-bell" style={{ transform: 'scale(1.4)', color: '#d2d3d5' }}><HiBell /></span>
        <span style={{ position: 'relative', left: '-0.7em', color: 'red', top: '-0.4em' }}><VscCircleFilled /></span>
        
      </div>
      
    </nav>
  )
}

export default SideNav;
