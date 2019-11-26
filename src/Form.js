import React, { useState } from 'react';
import checkInput from './api';

export const errorMessage = 'Not a valid input';
export const successMessage = 'You Passed!';
export const failureMessage = 'You Failed!';
export const loadingMessage = 'Loading ...';
export default function Form(props) {
    const { name, number } = props.model;
    let [loading, setLoading] = useState(false);
    let [error, setError] = useState('');
    let [message, setMessage] = useState('');
    let [value, setValue] = useState('');
    const handleSubmit = async () => {
        const input = parseInt(value);

        setLoading(true);
        setError('');
        setMessage('');
        if (!Number.isInteger(input)) {
            setError(errorMessage);
            setLoading(false);
        } else {
            await checkInput(number, input)?
            setMessage(successMessage):
            setMessage(failureMessage);
            setLoading(false);
        }
    };
    return (
        <>
            <div className='header'>
                Howdy {name}!
            <p className='helper'>Prove You Aint' a &#x1f916;</p>
            </div>
            <div>
                <span className='number'>{number}</span>
                <span className='operator'>+</span>
                <span className='number'>{number}</span>
                <span className='operator'>=</span>
                <input className='input' type='text' value={value} onChange={({ target: { value } }) => setValue(value)}></input>
                <button className='button' onClick={handleSubmit}>Submit</button>
            </div>
            <div className="message">
                {loading && loadingMessage}
                {!loading && message}
            </div>
            <div className="error">
                {!loading && error}
            </div>
        </>
    );
}