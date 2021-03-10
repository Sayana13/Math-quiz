import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.css";

export default function Question(props) {

    const {el} = props;
    const [userAnswer, setUserAnswer] = useState('');

    const okButtonHandler = () => {
        props.getAnswer(el.serialNumber, userAnswer)
        setUserAnswer('')
    }

    return (
        <div key={el.serialNumber}>
            {el.serialNumber}){' '}
            {el.firstNumber} {' '}
            {el.sign} {' '}
            {el.secondNumber} {' '} = {' '}

            {el.userAnswer === undefined &&
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
            {el.userAnswer}

            <button onClick={props.getQuestion}
                    disabled={props.el.userAnswer === undefined}
                    type="button" className="btn btn-primary btn-sm"> Next
            </button>
            {' '}
        </div>)
}

