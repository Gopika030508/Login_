import React from 'react'
import Logo from './profile-user.png'
import Lock from './padlock.png'
import './Login.css'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import Main from './Main';


const Login = () => {
    const navigate = new useNavigate();
    const handleBack = () => {
        navigate('/')
    }
    const handleMain = () => {
        navigate('/Main')
    }


  return (
    <div className='login-page'>
      <div className="wrapper">
        <button className="nav-back" onClick={handleBack}>
            <IoArrowBackCircleOutline className="back-arrow-btn"/>
        </button>
        <h1>
            LOGIN
        </h1>
        <div className="input-user">
            <input type="text" placeholder="Username" required/>
            <span>
                <img src={Logo} alt="user" />
            </span>
        </div>
        <div className="input-user">
            <input type="password" placeholder="password" required/>
            <span>
                <img src={Lock} alt="" />
            </span>
        </div>
        <div className="forgot-pwd">
            <a href="#">forgot password?</a>
        </div>
        <div className="submit-div">
            <button className="submit" onClick={handleMain}>
                LOGIN
            </button>
        </div>
      </div>
    </div>
  )
}

export default Login
