# Final Project - History Portal

[<img src="https://img.shields.io/badge/Stephon_Autery-let's_begin_here_...-goldenrod.svg" target="_blank">](http://stephonautery.com) [<img src="https://img.shields.io/badge/license-MIT-blue.svg">](https://opensource.org/licenses/MIT) [<img src="https://img.shields.io/badge/_ES_-_6_-green.svg">](http://www.ecma-international.org/ecma-262/6.0/) [<img src=https://img.shields.io/badge/_path_-_7.1.0_-green.svg>](https://www.npmjs.com/package/path) [<img src=https://img.shields.io/badge/_express_-_4.16.4-pink.svg>](https://www.npmjs.com/package/fs-extra) [<img src=https://img.shields.io/badge/_MongoDB_-4.2.6_-orange.svg>](https://www.mongodb.com/company) [<img src=https://img.shields.io/badge/_JSON-RFC_8259_-brown.svg>](https://www.npmjs.com/package/console.table) [<img src=https://img.shields.io/badge/React-v16.13.1_-blue.svg>](https://www.npmjs.com/package/console.table) [<img src=https://img.shields.io/badge/Node-v12.16.3_-darkgreen.svg>](https://www.npmjs.com/package/console.table)

History Portal is a MongoDB/React/Express/Node.js game app.

## site picture

![Site](./client/public/images/history-portal.PNG)

## code snippet

This is a REACT application. Below is JSX code that handles the submission of a key form in the application.

```javaScript

    handleFormSubmit() {
        //get the answer
        if (this.state.selectedOption) {
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

```

## dependencies

MongoDB\
Express\
React\
Node.js

### [History Portal on GitHub](https://github.com/StephonAutery/final-project)

### [History Portal deployed site](https://history-portal.herokuapp.com/login)

## contributors

- Stephon Autery

## Stephon Autery

![StephonAutery](./client/public/images/stephon-headshot-garden-small.jpg)

[Stephon Autery on GitHub](https://github.com/StephonAutery)

[Stephon Autery on LinkedIn](https://www.linkedin.com/in/stephon-a-1bb575198/)
