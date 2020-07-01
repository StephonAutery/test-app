import React, { Component } from 'react';
// import axios from 'axios';
import API from "../utils/API";

export default class Login extends Component {
    state = {
        username: "",
        password: "",
        redirectTo: null
    }

    handleChange = event => {
        console.log(event.target.name + " | " + event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    setRedirect = event => {
        this.setState({
            redirectTo: '/questions'
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        // console.log("---- handleFormSubmit");
        // console.log(this.state.username);
        // console.log(this.state.password);
        // console.log("---- handleFormSubmit");
        API.loginUser({
            username: this.state.username
        })
            .then(res => {
                console.log('+++ login response: ');
                console.log(res);
                console.log('+++ login response: ');
                if (res.status === 200) {
                    // update users state on App.js
                    this.props.updateUser({
                        loggedIn: true,
                        username: res.data.username
                    })
                }
                this.forceUpdate(this.setRedirect);
            }).catch(err => {
                console.log("dang!");
                console.log(err);
            });
        // redirect to questions
    }

    render() {
        return (
            <div className="container p-2 w-50">
                <h3><p>welcome back, please login</p></h3>
                <hr />
                <form>
                    <label htmlFor="username">
                        &nbsp;&nbsp;user name:
                        <p>
                            <input
                                type="text"
                                // value={this.state.username}
                                name="username"
                                placeholder="user name"
                                onChange={this.handleChange}
                            />
                        </p>
                    </label>
                    <br />
                    <label htmlFor="password">
                        &nbsp;&nbsp;password:
                        <p>
                            <input
                                type="text"
                                name="password"
                                placeholder="password"
                                onChange={this.handleChange}
                            />
                        </p>
                    </label>
                    <hr />
                    <p>
                        <button
                            className="save btn btn-danger"
                            onClick={this.handleFormSubmit}
                            type="submit"
                            value="submit">login
                        </button>
                    </p>

                </form>
            </div>
        )
    }
}