import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UnAuth.css'
import Footer from '../../Component/Footer/Footer';
import { Button } from 'react-bootstrap'

const UnAuth = () => {
    const navigate=useNavigate()

    const LoginPage=()=>{
        navigate('/login_page')
    }
  return (
      <>
<div className='unauth'>
    <p className='txtunauth'>You're not Authorised Customer</p>
    <Button type='submit' onClick={LoginPage}>Click for Login</Button>
</div>
<Footer/>
</>
  ) 
};
export default UnAuth