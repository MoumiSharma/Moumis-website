import React from 'react'
import {Container,Button,Card,CardGroup} from "react-bootstrap"
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';
import './Home.css'



export default function Home() {
  const navigate=useNavigate()

  return (
      <>
      <div>
       <Container>
           
            <img src='https://cdn.stocksnap.io/img-thumbs/960w/WJL4RY6N6Z.jpg' className='imghome'/>
           <div>
           <h6 className='txt1'> "photography is a way of feeling,
        of touching, of loving, what you have caught on film is captured forever... It resmembers little things, 
        long after you have forgotten everything." -Aaron Siskind</h6>
        </div>
         
       </Container>
        
    
    
       
        
        <br/>
        <br/>
        <br/>
        <br/>
        <h2>Professional Photographer</h2>
        <p className='line'>I am currently available for freelance photo and video work. I specialize 
         in lifestyle,wedding and concert photography but also have Professional 
         experience with brand and product photography.</p>
         <br/>
         <br/>
         <br/>
         <br/>

         <CardGroup>
  {/* <Card>
    <Card.Img variant="top" src="https://instepdancewear.co.uk/wp-content/uploads/2015/10/bigstock-couple-dancing-contemporary-ov-60551471.jpg" className='img20'/>
    
  </Card> */}

  <Card>
    <div className='bgndhome'>
    <Button variant="success" href="/subhome_page" className='btnhome'>Book Now</Button>
  </div>
  </Card>
  
</CardGroup>
<br/>
<br/>
<br/>
         
</div>
   <Footer/>
   </>
  )
}
