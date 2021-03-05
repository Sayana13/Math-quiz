import React, {useState} from 'react';

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

            <input value={userAnswer}
                   onChange={(event) =>
                       setUserAnswer(Number(event.target.value))}
                   type="number"
            />
            <button onClick={okButtonHandler}> Ok</button>
            <button onClick={props.getQuestion}> Next</button>
        </div>)
}

