import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavigationBar = () => {
  return (
    <Navbar>
      <Navbar.Brand>Monitor</Navbar.Brand>
      <Nav>
        <Nav.Link href="#">Home</Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default NavigationBar
