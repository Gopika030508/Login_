import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Login from './Login';

const Main = () => {
    const navigate=new useNavigate();
    const handleback=() => {
        navigate('/Login')
    }
  return (
    <div>
      <button onClick={handleback}>
        home
      </button>
    </div>
  )
}

export default Main
