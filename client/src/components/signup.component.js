import React, { Component } from 'react';
// import axios from 'axios';
// import { response } from 'express';
import API from "../utils/API";

export default class NewQuestions extends Component {
    state = {
        username: "",
        password: "",
        confirmPassword: '',
        loggedIn: false,
        redirectTo: null
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log('sign-up handleSubmit, username: ');
        console.log(this.state.username);
        API
            .getUser('/users/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(res => {
                console.log("login response: ");
                console.log(res);
                if (!res.data.errmsg) {
                    console.log('successful signup')
                    this.setState({
                        redirectTo: '/login'
                    })
                } else {
                    console.log('username already taken');
                }
            }).catch(err => {
                console.log("dang! you're not signed up!");
                console.log(err);
            });
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="container p-2 w-50">
                <h3><p>hello new user</p></h3>
                <hr />
                <form onSubmit={this.handleFormSubmit}>
                    <label htmlFor="username">
                        &nbsp;&nbsp;user name:
                        <p>
                            <input
                                type="text"
                                value={this.state.username}
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
                                value={this.state.username}
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
                            onClick={this.handleSubmit}
                            type="submit"
                        >sign up</button>
                    </p>
                </form>
            </div>
        )
    }
}