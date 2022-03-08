import React from 'react';
import {useFormik} from 'formik';
import axios from 'axios'
import { Container,Row,Col } from 'react-bootstrap'
import Footer from '../../Component/Footer/Footer'
import './Login.css'
import { useNavigate } from 'react-router-dom';



const ValidateForm=(formValue)=> {
    const errors={};
    

    const reg_exp_email=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

    if(!formValue.email){
        errors.email="Please Enter email";
    } else if(!reg_exp_email.test(formValue.email)){
        errors.email="Invalid email"
    }

    if(!formValue.password){
        errors.password="Please Enter password";
    } else if(formValue.password.length<6){
        errors.password="min length 6"
    }

    console.log("Error: ",errors);
    return errors;
}

 const Login = () => {
    const navigate=useNavigate()
     const formik=useFormik({
         initialValues:{
            //  username:'',
             email:'',
             password:''
         },
         validate:ValidateForm,
         onSubmit:(values)=>{
             console.log("Received values: ",values);
             axios.post('https://node-project-storage.herokuapp.com/postUserData',values)
             .then(res=>{
                 console.log("Axious Response: ",res.data);
                 window.localStorage.setItem("Token value: ",res.data.token)
                 alert("You've Successfully loggeded in")
             })
             .catch(err=>{
                 console.log("Axious error: ",err);
                 navigate('/Register_page')
             })
         }
     });
     
  return (
      <div className='bgnd'>
    <Container className='cntn'>
  <Row classname='bckgnd'>
    <Col sm={6}></Col>
    <Col sm={6}>
        <div className='login'>
        <h5 className='font1'>User Login</h5>
          <form onSubmit={formik.handleSubmit}>
              
            

              <br />
              
              <input
              type="email"
              name="email"
              placeholder="Email Id"
              value={formik.values.email}
              onChange={formik.handleChange}
              className='mail'
              />

              
              <br />
              <br/>
              
              <input
              type="text"
              name="password"
              placeholder="Enter password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='password'/>
              {formik.touched.password && formik.errors.password?
            (<span style={{color:'red'}}>{formik.errors.password}</span>):null}
            <br/>
            <br/>
              <button type='submit' className='btn'>Log in</button>
             <p>
                 <a href="#">Forgot password? </a> or <a href="/register_page">Sign Up</a> </p>
          </form>
      </div></Col>
  </Row>
  </Container>  
<Footer/>
  </div>


      
  )}
export default Login