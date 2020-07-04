import React from "react";

function QInfo(props) {
    console.log(props)
    return (
        <div>
            <p>You answered: {props.response}</p>
            <p>Correct answer: {props.answer}</p>
            <hr />
            <p>{props.info}</p>
        </div>
    );
}

export default QInfo;
