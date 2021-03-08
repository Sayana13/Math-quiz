import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.css";

export default function Question(props) {

    const {question} = props;
    const [userAnswer, setUserAnswer] = useState('');

    const okButtonHandler = () => {
        props.getAnswer(question.serialNumber, userAnswer)
        setUserAnswer('')
    }

    return (
        <div key={question.serialNumber}>
            {question.serialNumber}){' '}
            {question.firstNumber} {' '}
            {question.sign} {' '}
            {question.secondNumber} {' '} = {' '}

            {!question.userAnswer &&
                <>
                    <input value={userAnswer}
                           onChange={(event) =>
                               setUserAnswer(Number(event.target.value))}
                           type="number"
                    /> {' '}
                    <button onClick={okButtonHandler} type="button" className="btn btn-primary btn-sm"> Ok</button>
                    {' '}
                </>
            }
            {question.userAnswer}

            <button onClick={props.getQuestion}
                    disabled={props.question.userAnswer === undefined}
                    type="button" className="btn btn-primary btn-sm"> Next
            </button>
            {' '}
        </div>)
}

