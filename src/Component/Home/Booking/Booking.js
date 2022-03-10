import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Footer/Footer'
import './Booking.css'

export const Booking = () => {
  return (
      <>
    <div className='booking'>Thank you, You've successfully booked your day.
    <div className='back'>
      <a href='/'>Back to home</a>
      </div>
    </div>
    <Footer/>
    </>
  )
}
