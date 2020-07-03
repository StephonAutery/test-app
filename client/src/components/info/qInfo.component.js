import React from "react";

function QInfo(props) {
    console.log(props)
    return (
        <div>
            <hr />
            <p>you answered: {props.response}</p>
            <p>correct answer: {props.answer}</p>
            <hr />
            <p>{props.info}</p>
        </div>
    );
}

export default QInfo;
