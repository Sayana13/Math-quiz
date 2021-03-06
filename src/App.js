import React from 'react';
import './App.css';
import {useState} from "react";
import Question from "./Question";
import "bootstrap/dist/css/bootstrap.css";

function App() {

    const signs = ["+", "-", "*"];
    const [questions, setQuestions] = useState([]);
    const [serialNumber, setSerialNumber] = useState(1);


    const getQuestion = () => {
        const firstNumber = Math.floor(Math.random() * 10);
        const sign = signs[Math.floor(Math.random() * 3)];
        const secondNumber = Math.floor(Math.random() * 10);

        const newQuestions = [...questions, {serialNumber, firstNumber, sign, secondNumber}]
        setQuestions(newQuestions)
        setSerialNumber(serialNumber + 1);
    }

    const getRightAnswer = (question) => {
        switch (question.sign) {
            case '+':
                return question.firsNumber + question.secondNumber;
            case '-':
                return question.firsNumber - question.secondNumber;
            case '*':
                return question.firsNumber * question.secondNumber;
        }

    }
    const getAnswer = (serialNumber, userAnswer) => {

        const rightAnswer = getRightAnswer(questions[questions.length - 1]);
        const newQuestions = questions.map(el => {
            if (el.serialNumber === serialNumber)
                return {...el, rightAnswer, userAnswer: userAnswer};
            return el;
        })
        setQuestions(newQuestions)
    }

    return (
        <div className="p-3 mb-2 bg-info text-dark">
            <h1>Math Quiz</h1>
            <hr/>

            <button disabled={serialNumber !== 1}
                    onClick={getQuestion}
                    type="button"
                    className="btn btn-primary btn-sm"> Start</button>
            {questions.map(el => <Question
                question={el}
                getAnswer={getAnswer}
                getQuestion={getQuestion}
            />)}


        </div>
    );
};

export default App;
