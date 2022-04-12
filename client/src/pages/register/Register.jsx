import React, { useState } from 'react';
import { register } from '../../redux/Action/UserAction';
import { useDispatch, useSelector } from 'react-redux'
import './Register.css';
import { Navigate } from 'react-router-dom';

const Register = () => {

  const [Username, setUsername] = useState("")
  const [Lastname, setLastname] = useState("")
  const [Email, setEmail] = useState("")
  const [Phone, setPhone] = useState("")
  const [Password, setPassword] = useState("")
  const dispatch = useDispatch()

  const { Loading, user, error } = useSelector((state) => state.usereducer);
  const token = localStorage.getItem('token');

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(register({ Username, Lastname, Email, Phone, Password }))
  }

  return (
    <div className='body'>{
      token ? (<Navigate to="/" />) : (
        <div className='containerR'>
          <form onSubmit={handleLogin} className='formR' >
            <h1 className='titreR'>Create Account</h1>
            <label className='labelR'> Username </label>
            <input type="text" className='inputR'
              onChange={(e) => setUsername(e.target.value)} />
            <label className='labelR'> Lastname </label>
            <input type="text" className='inputR'
              onChange={(e) => setLastname(e.target.value)} />
            <label className='labelR'> Email </label>
            <input type="email" className='inputR'
              onChange={(e) => setEmail(e.target.value)} />
            <label className='labelR'> Phone </label>
            <input type="text" className='inputR'
              onChange={(e) => setPhone(e.target.value)} />
            <label className='labelR'> Password </label>
            <input type="password" className='inputR'
              onChange={(e) => setPassword(e.target.value)} />
            <button className='buttonR'> Submit</button>
          </form>
        </div>)}
    </div>
  )
}


export default Register