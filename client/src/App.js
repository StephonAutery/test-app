import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import axios from 'axios';
import API from './utils/API.js'
import "./App.css";
import Navbar from "./components/navbar.component";
import Person from "./components/person.component";
import Questions from "./components/questions.component";
import Users from "./components/users.component";
import EditQuestions from "./components/edit-questions.component";
import NewQuestions from "./components/new-questions.component";
import MyStats from "./components/mystats.component";
import SignUp from "./components/signup.component";
import Login from "./components/login.component"

class App extends Component {
  state = {
    username: "",
    loggedIn: false,
    userObject: {},
    redirectTo: null
  }

  componentDidMount() {
    // this.getUser();
  }

  updateUser(userObject) {
    console.log("-------------- userObject --")
    console.log(userObject);
    console.log("-------------- userObject --")
    this.setState({userObject: userObject});
  }

  getUser() {
    API.getUser({
      username: this.state.username,
      password: this.state.password
    }).then(res => {
      console.log("----- App.js - getUser res");
      console.log(res.data);
      console.log("----- App.js - getUser res");
      if (res.data.user) {
        console.log('Get User: There is a user saved in the server session: ');
        this.setState({
          loggedIn: true,
          username: res.data.user.username
        })
      } else {
        console.log('---- App.js - get user failed.');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Router>
          <Switch>
            <Route exact
              path="/"
              render={() => {
                return (
                  (this.state.loggedIn ? < Redirect to="/questions" /> : < Redirect to="/users" />)
                )
              }}
            />
            <Route path="/questions" component={Questions} />
            <Route path="/new-questions" component={NewQuestions} />
            <Route path="/edit-questions/:id" component={EditQuestions} />
            <Route path="/person" component={Person} />
            <Route path="/mystats" component={MyStats} />
            <Route path="/users" component={Users} />
            <Route path="/*" component={Users} />
            <Route
              path="/users"
              render={() =>
                <SignUp />}
            />
            <Route
              path="/users"
              render={() =>
                <Login updateUser={this.updateUser} />}
            />
          </Switch>
        </Router>
      </div >
    );
  }
}

export default App;