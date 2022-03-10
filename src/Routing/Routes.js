
import React from 'react'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Registration from '../Authentication/Registration/Registration'
import Login from '../Authentication/Login/Login'
import About from '../Component/About/About'
import Contact from '../Component/Contact/Contact'
import Footer from '../Component/Footer/Footer'
import Photos from '../Component/Photos/Photos'
import Videos from '../Component/Videos/Videos'
import Header from '../LayOut/Header'
import Home from '../Component/Home/Home'
import { SubHome } from '../Component/Home/SubHome/SubHome'
import { Booking } from '../Component/Home/Booking/Booking'
import Forgot  from '../Component/Forgot/Forgot'
import UnAuth from '../Authentication/UnAuth/UnAuth'
import ProtectedRoutes from './ProtectedRoutes'
import BookForm from '../Component/Home/BookingForm/BookForm'




export const Routing = () => {
  return (
   <Router>
       <Header/>
            <Routes>
            <Route path="" element={<Home />} />
            <Route element={<ProtectedRoutes />}>
            <Route path="photo_page" element={<Photos />} />
            <Route path="video_page" element={<Videos />} />
            </Route>
            <Route path="contact_page" element={<Contact />} />
            <Route path="about_page" element={<About />} />
           
            <Route path="footer_page" element={<Footer />} />
            <Route path="login_page" element={<Login />} />
            <Route path="register_page" element={<Registration />} />
            <Route path="subhome_page" element={<SubHome/>} />
            <Route path="booking_page" element={<Booking/>} />
            <Route path="forgot_page" element={<Forgot/>} />
            <Route path="unauth_page" element={<UnAuth/>} />
            <Route path="bookform_page" element={<BookForm/>} />
            
            </Routes>
   </Router>
  )
}
