import React from 'react';
import { Component } from 'react';
import API from '../../utils/API';
import Container from "../container.component";
import { Redirect } from "react-router-dom";
import PresInfo from "../info/presInfo.component";

export default class Questions extends Component {
    state = {
        switch: true,
        redirect: "",
        presidents: [],
        questionSet: "getQuestions",
        selectedOption: '',
        presNum: 0,
        pres: ""
    }

    componentDidMount() {
        API.getPres()
            .then(res => {
                this.setState({
                    presidents: res.data
                })
            })
            .then(() => {
                this.setState({
                    presNum: 1,
                });
            })
    }

    onValueChange = event => {
        this.setState({
            selectedOption: event.target.value
        });
    }

    handleFormSubmit = event => {
        // console.log(this.props);
        return (
            <PresInfo />
        );
    }

    createCards(index) {
        let cards = [];
        for (let i = 0; i < 3; i++) {
            cards.push(< div key={index + 5} className="card p-2 m-2" >
                <div className="card-body">
                    <h5>{this.state.presidents[index].president}</h5>
                    <h6>{this.state.presidents[index].number}</h6>
                    <hr />
                    birth year: {this.state.presidents[index].birth_year}  <br />
                    took office: {this.state.presidents[index].took_office}<br />
                    left office: {this.state.presidents[index].left_office}<br />
                    death year: {this.state.presidents[index].death_year}<br />
                    party: {this.state.presidents[index].party}<hr />
                    <p>
                        <a href="/play" className="btn btn-info">return to portal</a>
                    </p>
                    <p>
                        <a href="/play" data={this.state.presidents[index]._id} className="btn btn-info">{this.state.presidents[index]._id}</a>
                    </p>
                </div>
            </div>);
            index++;
        }
        return cards;
    }

    createRow(index) {
        if (index % 3 === 0) {
            return (
                <div key={index + 7} className="row">
                    {this.createCards(index)}
                </div>)
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={{
                // sending data to next page
                pathname: this.state.redirect,
                state: {
                    id: this.props.location.state.id,
                    pres: this.state.pres._id
                }
            }} />
        }
        // let count = 0;
        return (
            <Container>
                <div className="container w-75">
                    <h4><p>The Presidents of the United States of America</p></h4>
                    <hr />
                    {this.state.presidents.map((pres, index) => (
                        <div key={index + 3}>
                            {this.createRow(index, pres)}
                        </div>
                    ))}
                </div>
            </Container >
        )
    }
}