import React from 'react';
import {useFormik} from 'formik';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Footer from '../../Footer/Footer'
import { Container,Row,Col,Button } from 'react-bootstrap'
import './BookForm.css'

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

  
    console.log("Error: ",errors);
    return errors;
}

 const BookForm = () => {

    const navigate=useNavigate()

     const formik=useFormik({
         initialValues:{
             username:'',
             address:'',
             contactno:'',
             email:'',
             date:''
         },
         validate:ValidateForm,
         onSubmit:(values)=>{
             console.log("Received values: ",values);
             axios.post('https://jsonplaceholder.typicode.com/users',values)
             .then(res=>{
                 console.log("Axios Resdponse: ",res);
                 navigate('/booking_page')
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
        <h5 className='font1'>User Details:</h5>
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
              type="text"
              name="address"
              placeholder="Enter your address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='mail'/>
              {formik.touched.address && formik.errors.address?
            (<span style={{color:'red'}}>{formik.errors.address}</span>):null}
              

              <br />
              <br />
             
              <input
              type="text"
              name="contactno"
              placeholder="Enter your phone no"
              value={formik.values.contactno}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='mail'/>
              {formik.touched.contactno && formik.errors.contactno?
            (<span style={{color:'red'}}>{formik.errors.contactno}</span>):null}
              

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
              type="date"
              name="date"
              placeholder="pick a date"
              value={formik.values.date}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='password'/>
              {formik.touched.date && formik.errors.date?
            (<span style={{color:'red'}}>{formik.errors.date}</span>):null}

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
export default BookForm