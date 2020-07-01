import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { Nav } from 'react-bootstrap';
import API from '../utils/API';
import '../utils/App.css';

export default class Navbar extends Component {

  state = {
    logout: false,
    loggedIn: true
  }

  logout(event) {
    event.preventDefault()
    console.log('logging out')
    API.logoutUser('/user/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.props.updateUser({
          loggedIn: true,
          username: null
        })
      }
    }).catch(error => {
      console.log('Logout error')
    })
  }

  render() {
    return (
      // <Navbar bg="light" expand="lg">
      //   <Navbar.Brand href="#users">HistoryPortal</Navbar.Brand>
      //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
      //   <Navbar.Collapse id="basic-navbar-nav">
      //     <Nav className="mr-auto">
      //       <Nav.Link href="#questions">questions</Nav.Link>
      //       <Nav.Link href="#new-question">insert question</Nav.Link>
      //       <Nav.Link href="#users">users</Nav.Link>
      //       <Nav.Link href="#signup">sign up</Nav.Link>
      //       <Nav.Link href="#login">login</Nav.Link>
      //     </Nav>
      //   </Navbar.Collapse>
      // </Navbar>

      <nav className="navbar navbar-expand-sm navbar-light bg-light mb-4">
        <a className="navbar-brand" href="/users">HistoryPortal</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {/* <li className="nav-item active">
              <a className=   "nav-link" href="/questions">Questions <span className="sr-only">(current)</span></a >
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="/new-questions">Insert Question</a>
            </li>            
            {/* <li className="nav-item">
              <a className="nav-link" href="/mystats">stats</a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="/users">Play</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/signup">Sign Up</a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link" href="/login">Login</a>
            </li> */}
          </ul>
        </div>
      </nav>
    )
  }
}