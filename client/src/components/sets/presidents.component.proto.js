import React from 'react';
import { Component } from 'react';
import API from '../../utils/API';
import Container from "../container.component";
import { Redirect } from "react-router-dom";
import PresInfo from "../info/presInfo.component";
// import Moment from 'react-moment';

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

    constructor(props) {
        super(props);
        this.playStephon = this.componentDidMount.bind(this);
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

    createCards(pres){

    }
    createRow(index, pres) {
        if (index % 3 === 0) {
            return( 
            <div className="row">

            </div>
            )
        }
        return("not");
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
                    <h4><p>president number : {this.state.presNum}</p></h4>
                    <hr />

                    {this.state.presidents.map((pres, index) => (

                        <div key={index + 3}>
                            {/* {this.state.switch ? this.createRow(index, pres) : ""} */}
                            < div key={index} className="card p-2 m-2" >
                                <div key={pres._id} className="card-body">
                                    <h4>{pres.president}</h4>
                                    {pres.number}<hr />
                                        birth year: {pres.birth_year}  <br />
                                        took office: {pres.took_office}<br />
                                        left office: {pres.left_office}<br />
                                        death year: {pres.death_year}<br />
                                        party: {pres.party}<hr />
                                    <p>
                                        <a href="/play" className="btn btn-info">return to portal</a>
                                    </p>
                                    <p>
                                        <a href="/play" data={pres._id} className="btn btn-info">{pres._id}</a>
                                    </p>
                                    <p>
                                        <button
                                            onClick={() => this.handleFormSubmit()}
                                            className="save btn btn-info"
                                            type="submit">next President
                                    </button>
                                    </p>
                                </div>
                            </div>
                        </div>

                    ))}

                    {/* <PresInfo /> */}
                </div>



            </Container >
        )
    }
}