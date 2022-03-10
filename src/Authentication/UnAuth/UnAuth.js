import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UnAuth.css'
import Footer from '../../Component/Footer/Footer';

const UnAuth = () => {
    const navigate=useNavigate()

    const LoginPage=()=>{
        navigate('/login_page')
    }
  return (
      <>
<div>
    <p>You're not Authorised Customer</p>
    <button type='submit' onClick={LoginPage}>Click for Login</button>
</div>
<Footer/>
</>
  ) 
};
export default UnAuth