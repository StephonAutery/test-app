import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

export default class Landing extends Component {
    state = {
        redirect: ""
    }
    constructor(props) {
        super(props);
        this.playStephon = this.playStephon.bind(this);
        this.playSue = this.playSue.bind(this);
        this.playPres = this.playPres.bind(this);
    }

    componentDidMount() {
        if (!localStorage.getItem('loginData')) {
            this.setState({
                redirect: "landing"
            })
        }
    }

    playStephon(event) {
        event.preventDefault();
        this.setState({
            redirect: "questions"
        });
    }

    playSue(event) {
        event.preventDefault();
        this.setState({
            redirect: "sueQuestions"
        });
    }

    playPres(event) {
        event.preventDefault();
        this.setState({
            redirect: "presidents"
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={{
                pathname: this.state.redirect,
                state: {
                    id: JSON.parse(localStorage.getItem('loginData'))
                }
            }} />
        }
        return (
            <div className="container w-75">
                <form>
                    <div className="card p-4 m-4">
                        <h4>question sets</h4>
                    </div>
                    <div className="card p-4 m-4">
                        <p>Susannah Levy is an OBGyn/Obstetrics Nurse at UCSF General Hospital and the Mother of 2.</p>
                        <p>
                            <button
                                className="save btn btn-info"
                                onClick={this.playSue}
                                type="submit"
                                value="submit">Susannah Levy
                            </button>
                        </p>
                    </div>
                    <div className="card p-4 m-4">
                        <p>Stephon Autery is a Full Stack Developer and the Father of 2.</p>
                        <p>
                            <button
                                className="save btn btn-info"
                                onClick={this.playStephon}
                                type="submit"
                                value="submit">Stephon Autery
                            </button>
                        </p>
                    </div>
                    <div className="card p-4 m-4">
                        <p>Explore the TRUE histories of the Presidents of the United States?</p>
                        <p>
                            <button
                                className="save btn btn-info"
                                onClick={this.playPres}
                                type="submit"
                                value="submit">who's your President
                            </button>
                        </p>
                    </div>
                </form>
            </div >
        )
    }
}