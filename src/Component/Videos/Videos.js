import React from 'react'
import ReactPlayer from 'react-player'
import './videos.css'
import { CardGroup,Card, } from 'react-bootstrap'
import Footer from '../Footer/Footer'

export default function Videos() {
  return (
    <>
   
     <br/>
     <div className='vid'>
        <br/>
      <h3>Music Videos :</h3>
      <br/>
      </div>
      <CardGroup className='group'>
    <Card>
    <ReactPlayer
        width='480px'
        height='240px'
        controls
        url='https://www.youtube.com/watch?v=b1K2t8HiLQk'
        />
      </Card>

    <Card>
    <ReactPlayer
        width='480px'
        height='240px'
        controls
        url='https://youtu.be/FQAqQ9TEFWI'
        />
    
      </Card>

    <Card>
    <ReactPlayer
        width='480px'
        height='240px'
        controls
        url='https://youtu.be/XV9UF4G6TJo'
        />
    
      </Card>
       </CardGroup>

       <br/>

      <CardGroup className='group'>
      <Card>
    <ReactPlayer
        width='480px'
        height='240px'
        controls
        url='https://youtu.be/SPrCeEFb0c4'
        />
      </Card>

      <Card>
    <ReactPlayer
        width='480px'
        height='240px'
        controls
        url='https://youtu.be/M2HIhG7OOEs'
        />
      </Card>

      <Card>
    <ReactPlayer
        width='480px'
        height='240px'
        controls
        url='https://youtu.be/yWEHFf6r8to'
        />
      </Card>
</CardGroup>

<br/>
<div className='vid'>
<br/>
<h3>Advertisement :</h3>
<br/>
</div>
<CardGroup className='group'>
      <Card>
    <ReactPlayer
        width='480px'
        height='240px'
        controls
        url='https://youtu.be/CnKHzJjOcvo'
        />
      </Card>

      <Card>
    <ReactPlayer
        width='480px'
        height='240px'
        controls
        url='https://youtu.be/T7FNuJuWE9s'
        />
      </Card>

      <Card>
    <ReactPlayer
        width='480px'
        height='240px'
        controls
        url='https://youtu.be/njnR_oyA7SI'
        />
      </Card>
</CardGroup>


<br/>
<div className='vid'>
<br/>
<h3>Making Videos :</h3>
<br/>
</div>
<CardGroup className='group'>
      <Card>
    <ReactPlayer
        width='480px'
        height='240px'
        controls
        url='https://youtu.be/kMiJXnxGlgc'
        />
      </Card>


      <Card>
    <ReactPlayer
        width='480px'
        height='240px'
        controls
        url='https://youtu.be/EhDjkh-LPbI'
        />
      </Card>
</CardGroup>
<br/>
<br/>
  <Footer/>
  </>







   
  )
}
