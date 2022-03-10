import React from 'react';
import {useFormik} from 'formik';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { Container,Row,Col,Button } from 'react-bootstrap'
import './Forgot.css'

const ValidateForm=(formValue)=> {
    const errors={};
   

    

    

    if(!formValue.new_password){
        errors.new_password="Please Enter password";
    } else if(formValue.new_password.length<6){
        errors.new_password="min length 6"
    } 

    console.log("Error: ",errors);
    return errors;
}

 const Forgot = () => {

    const navigate=useNavigate()

     const formik=useFormik({
         initialValues:{
             new_password:'',
             confirm_password:''
         },
         validate:ValidateForm,
         onSubmit:(values)=>{
             console.log("Received values: ",values);
             axios.post('https://jsonplaceholder.typicode.com/users',values)
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
        <h5 className='font1'>Create your password:</h5>
          <form onSubmit={formik.handleSubmit}>
              <br />
              <br />
              
              <input
              type="password"
              name="new_password"
              placeholder="Enter new password"
              value={formik.values.new_password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='user'/>
              {formik.touched.new_password && formik.errors.new_password?
            (<span style={{color:'red'}}>{formik.errors.new_password}</span>):null}

              <br />
              <br />
             
              
              <input
              type="password"
              name="confirm_password"
              placeholder="re enter your password"
              value={formik.values.confirm_password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='password'/>
              {formik.touched.confirm_password && formik.errors.confirm_password?
            (<span style={{color:'red'}}>{formik.errors.confirm_password}</span>):null}


            <br/>
            <Button type='submit' className='btn' disabled={!(formik.isValid && formik.dirty)}>Submit</Button>
          </form>
      </div>
      </Col>
  </Row>
  </Container>  
  
<Footer/>
</div>
  )}
export default Forgot