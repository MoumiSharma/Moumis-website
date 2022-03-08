import React from 'react';
import {useFormik} from 'formik';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Footer from '../../Component/Footer/Footer';
import { Container,Row,Col } from 'react-bootstrap'
import './Registration.css'

const ValidateForm=(formValue)=> {
    const errors={};
    const reg_exp_email=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

    if(!formValue.username){
        errors.username="Please Enter Your Name";
    } else if(formValue.username.length<4){
        errors.username="min length 4"
    }

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

 const Registration = () => {

    const navigate=useNavigate()

     const formik=useFormik({
         initialValues:{
             username:'',
             email:'',
             password:''
         },
         validate:ValidateForm,
         onSubmit:(values)=>{
             console.log("Received values: ",values);
             axios.post('https://project-node-1.herokuapp.com/postUserData',values)
             .then(res=>{
                 console.log("Axios Resdponse: ",res);
                 navigate('/login_page')
             })
             .catch(err=>{
                 console.log("Axios error: ",err)
             })
         }
     });
  return (
      
    <div className='bgnd'>
    <Container className='cntn'>
  <Row className='bckgrnd'>
    <Col sm={6}></Col>
    <Col sm={6}>
        <div className='login'>
        <h5 className='font1'>User Signup</h5>
          <form onSubmit={formik.handleSubmit}>
              <br />
              <br />
              
              <input
              type="text"
              name="username"
              placeholder="Enter username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='user'/>
              {formik.touched.username && formik.errors.username?
            (<span style={{color:'red'}}>{formik.errors.username}</span>):null}

              <br />
              <br />
             
              <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='mail'/>
              {formik.touched.email && formik.errors.email?
            (<span style={{color:'red'}}>{formik.errors.email}</span>):null}
              

              
              <br />
              <br />
              
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
            <button type='submit' className='btn' disabled={!(formik.isValid && formik.dirty)}>Sign Up</button>
          </form>
      </div>
      </Col>
  </Row>
  </Container>  
  
<Footer/>
</div>
  )}
export default Registration