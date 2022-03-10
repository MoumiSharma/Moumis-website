import React from 'react';
import {useFormik} from 'formik';
import axios from 'axios'
import './Contact.css'
import Footer from '../Footer/Footer';
import { Button } from 'react-bootstrap'




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

const Contact = () => {

   

     const formik=useFormik({
         initialValues:{
             username:'',
             email:'',
             message:''
         },
         validate:ValidateForm,
         onSubmit:(values)=>{
             console.log("Received values: ",values);
             axios.post('https://jsonplaceholder.typicode.com/users',values)
             .then(res=>{
                 console.log("Axios Resdponse: ",res);
                 window.localStorage.setItem("Token value: ",res.data.token)
                 alert("Thank You.")
                 
             })
             .catch(err=>{
                 console.log("Axios error: ",err)
             })
         }
     });

return(
  <>
    <div className='container1'>

    <h1 className='A'>CONTACT</h1>
    <h3 className='B'>---------------------------------------------------------------------------------------------</h3>
         <h2 className='C'>I'd love to help!</h2>
         <p className='D'>I capture the moment with fun,open-minded people,Feel free to say hello! </p>

    <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card" className='card2'>
      
      <div class="card-body">
      <form onSubmit={formik.handleSubmit}>
              <br />
              <br />
             
              <input
              type="text"
              name="username"
              placeholder="Your Name"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='name1'/>
              {formik.touched.username && formik.errors.username?
            (<span style={{color:'red'}}>{formik.errors.username}</span>):null}

              <br />
              <br />
              
              <input
              type="email"
              name="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='email'/>
              {formik.touched.email && formik.errors.email?
            (<span style={{color:'red'}}>{formik.errors.email}</span>):null}
              

              
              <br />
              <br />
             
              <input
              type="text"
              name="message"
              placeholder="Message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className='message'/>
              {formik.touched.message && formik.errors.message?
            (<span style={{color:'red'}}>{formik.errors.message}</span>):null}

            <br/>
            <br/>
              <Button type='submit' className='submit' disabled={!(formik.isValid && formik.dirty) }>Send</Button>
          </form>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card1">
      
      <div class="card-body" className='cardbody1'>
        <div>
        <h6 className='E'><i class="fa fa-map-marker" aria-hidden="true" ></i>kolkata</h6>
      </div>
      <br/>
      <div>
      <h6 className='F'><i class='fa fa-mobile-phone'></i>+91-9836286825</h6>
      </div>
      <br/>
      <div>
      <h6 className='G'><i class="fa fa-envelope" aria-hidden="true"></i>moumisharma91@gmail.com</h6>
      </div>
      
        <h4 className='X'>---------------------------------------------</h4>
      
      <div className='H'><i class="fa fa-facebook" aria-hidden="true"></i><i class="fa fa-linkedin" aria-hidden="true"></i><i class="fa fa-twitter" aria-hidden="true"></i><i class="fa fa-google-plus" aria-hidden="true"></i></div>
      
      </div>
    </div>
  </div>
  
</div>


  </div>
  <Footer/>
  </>
    
)
}

export default Contact