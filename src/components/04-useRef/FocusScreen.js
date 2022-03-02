import React from 'react';
import { useState, useRef } from 'react';

import '../02--useEffect/effects.css'

export const FocusScreen = () => {

    const [ inputState, setInputState ] = useState({
        name: '',
        lastName: '',
        email: '',
    })
    const { name, lastName, email } = inputState;

    const handleInput = ({ target }) => {
        setInputState({ ...inputState, [ target.name ]: target.value })
    }

    const inputRef = useRef();
    const handleClick = () => {
        inputRef.current.select();
    }

    


    return(
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input 
                className="form-control"
                placeholder='Escribe tu nombre'
                name="name"
                id="name"
                value={ name }
                onChange={ handleInput }
            />
            <input 
                className="form-control mt-3"
                placeholder='Escribe tu apellido'
                name="lastName"
                ref={ inputRef }
                id="lastName"
                value={ lastName }
                onChange={ handleInput }
            />
            <input 
                className="form-control mt-3"
                placeholder='Escribe tu email'
                name="email"
                id="email"
                value={ email }
                onChange={ handleInput }
            />

            <button 
                className='btn btn-outline-primary mt-3'
                onClick={ handleClick }
            >
                Focus
            </button>
        </>
    )
};


