import React, { useEffect } from 'react'
import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap'
import {Link,useLocation} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './Header.css'


const Header=()=> {
  const navigate=useNavigate()

  const loggingOut=()=>{
    window.localStorage.clear()
    navigate('/login_page')
  }

  let location=useLocation();
  useEffect(()=>{
    console.log("Location: ",location,"\nPathName: ",location.pathname);
  },[location]);

  // const isAuth=window.localStorage.getItem('TokenValue')
  return (
    <div>
           <Navbar bg="dark" variant="dark" expand="lg" className='nav'>
  <Container>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
       <NavDropdown title="My work" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to={"/photo_page"}>Photos</NavDropdown.Item>
          <NavDropdown.Item as={Link} to={"/video_page"}>Videos</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link as={Link} to={"/about_page"}>About Me</Nav.Link>
        <Nav.Link as={Link} to={"/contact_page"}>Contact Me</Nav.Link>
       {/* {
        isAuth? */}

        <Nav.Link as={Link} to={"/login_page"}>Log in</Nav.Link>
        <button onClick={loggingOut} >Log out</button> 
        
      
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>













      {/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
        <Nav.Link as={Link} to={"/about_page"}>About Me</Nav.Link>
        </li>
        <li class="nav-item">
        <Nav.Link as={Link} to={"/contact_page"}>Contact</Nav.Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Product
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Nav.Link as={Link} to={"/about_page"}>Photos</Nav.Link>
            <li><a class="dropdown-item" href="#">Advertisement</a></li>
            <li><a class="dropdown-item" href="#"></a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav> */}
    </div>
  )
}

export default Header