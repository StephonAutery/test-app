import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import API from '../utils/API';

export default class Navbar extends Component {

  state = {

  }

  render() {
    return (
      <div className="container w-75">
        <div className="col-12 mt-4">
          <nav className="nav">
            <a className="nav-link active" href="/"><h5>HistoryPortal</h5></a>
            <a className="nav-link" href="/play">play</a>
            <a className="nav-link" href="/logout">logout</a>
          </nav>
        </div>
      </div>
    )
  }
}