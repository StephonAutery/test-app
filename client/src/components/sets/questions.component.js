import React, { Component } from 'react';
import API from '../../utils/API';
import Container from "./../container.component";
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
        answered: false,

        questionSet: "getQuestions",

        selectedOption: '',
        questionNum: 0,
        answerResult: [],
        numRight: 0,
        numWrong: 0,
        pCorrect: 0,
        pIncorrect: 0,
        id: ""
    }

    componentDidMount() {
        API.getQuestions()
            .then(res => {
                this.setState({
                    questions: res.data
                });
            })
            .then(res => {
                this.setState({
                    questionNum: 1,
                    question: this.state.questions[this.state.questionNum],
                    userID: JSON.parse(localStorage.getItem('loginData'))
                });
                console.log(this.state.userID);        
                API.getUserById(this.state.userID.userid)
                .then(res => {
                    this.setState({
                        user: res.data.user
                    });
                    console.log("----- user -");
                    console.log(this.state.user.name);
                });
            });
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
                    <h5>Question {this.state.questionNum}</h5>
                    <hr />
                    Current User: <h6>{this.state.user.name}</h6>
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
                                        &nbsp;&nbsp;{this.state.question.a}
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
                                        &nbsp;&nbsp;{this.state.question.b}
                                </label>
                            </p>
                            <p>
                                <label>
                                    <input
                                        type="radio"
                                        value="c"
                                        checked={this.state.selectedOption === "c"}
                                        onChange={this.onValueChange}
                                    />
                                        &nbsp;&nbsp;{this.state.question.c}
                                </label>
                            </p>
                        </div> : ""}
                    {/* <p>
                                {this.state.selected !== "c" && this.state.answered ? "" :
                                    <label>
                                        <input
                                            type="radio"
                                            value="c"
                                            checked={this.state.selectedOption === "c"}
                                            onChange={this.onValueChange}
                                        />
                                        &nbsp;&nbsp;{this.state.question.c}<br />
                                    </label>}
                            </p> */}
                    {/* <p>
                                <button
                                    onClick={() => this.qAnswered()}
                                    className="save btn btn-info"
                                    type="submit">answer
                                </button>
                            </p> */}

                    <div className="card p-4 m-4">
                        <p>
                            {!this.state.answered ?
                                <button
                                    onClick={() => this.qAnswered()}
                                    className="save btn btn-info"
                                    type="submit">answer
                                    </button>
                                : ""}
                        </p>
                        {this.state.answered ?
                            <QInfo
                                response={this.state.selectedOption}
                                answer={this.state.question.answer}
                                ID={this.state.question._id}
                                info={this.state.question.info}
                                thisQ_links={this.state.question.links}
                            />
                            : ""}
                        <p>
                            {this.state.answered ?
                                <button
                                    onClick={() => this.handleFormSubmit()}
                                    className="save btn btn-danger"
                                    type="submit">next question
                                    </button>
                                : ""}
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    )
}
}