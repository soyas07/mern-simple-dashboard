import React from 'react';
import { IoIosArrowDown } from 'react-icons/io'
import { HiBell } from 'react-icons/hi'
import useForm from '../../hooks/useForm'
import pic from '../../assets/download.png'

function SideNav() {

  const { logout } = useForm()

  return (
    <nav id="side-nav-container">
      <div className="profile-header">
        <div className="left-content">
          <img src={pic} alt="display picture" id="profile-pic" />
          <p>Thomas</p>
          <span style={{ position: 'relative',top: '3px', transform: 'scale(1.1)', marginLeft: '1em', color: '#d2d3d5'}}><IoIosArrowDown /></span>
        </div>
        
        <span style={{ transform: 'scale(1.4)', color: '#d2d3d5' }}><HiBell /></span>
        {/* <button onClick={logout}>logout</button> */}
      </div>
      
    </nav>
  )
}

export default SideNav;
