import React, { Component } from 'react';
import API from '../../utils/API';
import Container from "../container.component";
import QInfo from "../info/qInfo.component";
import { Redirect } from "react-router-dom";

export default class Questions extends Component {
    state = {
        questions: [],
        question: {},
        user: "",
        answers: [],
        results: [],
        answerID: 0,
        userID: "",

        questionSet: "getQuestions",

        // loggedIn: this.props.loggedIn,
        selectedOption: '',
        questionNum: 0,
        answerResult: [],
        numRight: 0,
        numWrong: 0,
        pCorrect: 0,
        pIncorrect: 0,
    }

    componentDidMount() {
        API.getSue()
            .then(res => {
                this.setState({
                    questions: res.data
                })
            })
            .then(() => {
                this.setState({
                    questionNum: 1,
                    question: this.state.questions[this.state.questionNum],
                    userID: JSON.parse(localStorage.getItem('loginData'))
                });
            })
        // API.LOC_API()
        //     .then(res => {
        //         // console.log(res.data.trending_content);
        //         console.log(res.data.results);
        //     })
    }

    onValueChange = event => {
        this.setState({
            selectedOption: event.target.value
        });
    }

    setQuestion() {
        this.setState({
            questionNum: this.state.questionNum + 1,
            question: this.state.questions[this.state.questionNum]
        });
    }

    handleFormSubmit() {
        //get the answer
        if (this.state.selectedOption) {
            this.setState({
                answered: false
            })
            if (this.state.question.answer === this.state.selectedOption || this.state.question.answer === 'all') {
                // if they get it right
                this.setState({
                    numRight: this.state.numRight + 1,
                    answerResult: this.state.answerResult.concat('right'),
                    selectedOption: ''
                });
            } else {
                // if they get it wrong
                this.setState({
                    numWrong: this.state.numWrong + 1,
                    answerResult: this.state.answerResult.concat('wrong'),
                    selectedOption: ''
                });
            }
            // if all the questions are answered, redirect to the stats page
            if (this.state.questionNum === this.state.questions.length) {
                this.setState({
                    redirect: "/mystats"
                });
            } else {
                this.setQuestion();
            }
        }
    }

    qAnswered() {
        if (this.state.selectedOption) {
            this.setState({
                answered: true
            })
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={{
                // sending data to mystats page
                pathname: this.state.redirect,
                state: {
                    id: this.state.userID.userid,
                    answers: this.state.answerResult,
                    numRight: this.state.numRight,
                    numWrong: this.state.numWrong,
                    pCorrecet: this.state.pCorrect,
                    pIncorrect: this.state.pIncorrect
                }
            }} />
        }
        return (
            <Container>
                <div className="container radio w-75">
                    <div className="card p-4 m-4">
                        <h4>Question {this.state.questionNum}</h4>
                        <hr />
                        {this.state.userID.userid}
                    </div>
                    <div>
                        <div className="card p-4 m-4">
                            {this.state.question.question}
                        </div>

                        {!this.state.answered ?
                        <div className="card p-4 m-4">
                            <p>
                                <label>
                                    <input
                                        type="radio"
                                        value="a"
                                        checked={this.state.selectedOption === "a"}
                                        onChange={this.onValueChange}
                                    />
                                        &nbsp;&nbsp;{this.state.question.a}<br />
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input
                                        type="radio"
                                        value="b"
                                        checked={this.state.selectedOption === "b"}
                                        onChange={this.onValueChange}
                                    />
                                        &nbsp;&nbsp;{this.state.question.b}<br />
                                </label>
                            </p>
                                <label>
                                    <input
                                        type="radio"
                                        value="c"
                                        checked={this.state.selectedOption === "c"}
                                        onChange={this.onValueChange}
                                    />
                                        &nbsp;&nbsp;{this.state.question.c}<br />
                                </label>
                            </div> : ""}
                            
                        <div className="card p-4 m-4">
                                {!this.state.answered ?
                                    <button
                                        onClick={() => this.qAnswered()}
                                        className="save btn btn-info"
                                        type="submit">answer
                                </button>
                                    : ""}
                            {this.state.answered ?
                                <QInfo
                                    response={this.state.selectedOption}
                                    answer={this.state.question.answer}
                                    ID={this.state.question._id}
                                    info={this.state.question.info}
                                    thisQ_links={this.state.question.links}
                                />
                                : ""}
                                {this.state.answered ?
                                    <button
                                        onClick={() => this.handleFormSubmit()}
                                        className="save btn btn-danger"
                                        type="submit">next question
                                </button>
                                    : ""}
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}