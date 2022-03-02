import React, { useEffect, useState } from 'react';
import { Message } from './Message';

import './effects.css'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
    });
    const { name, email } = formState;

    useEffect(() => {
        console.log('Hey i am use effect')
    }, [] )
    useEffect(() => {
        /* const { print } = window
        print() */
    }, [email, formState, name] )
    useEffect(() => {
        //(email.length > 10 && alert('escribre menos') ) 
        console.log('Se esta cambiando el email')
    }, [email] )

    const inputHandledChange = ( { target }) => {
        setFormState({
            ...formState,
            [ target.name ]: target.value
        });
        
        /* console.log( target.name )
        console.log( target.value ) */

    }

    return(
        <>
            <h1> useEffect </h1>
            <hr />

            <form className="form-group">
                <input 
                    type="text" 
                    className="form-control mb-3"
                    placeholder='Input'
                    name="name"
                    value={ name }
                    onChange={ inputHandledChange }
                    autoComplete='off' 
                />
                <input 
                    type="text" 
                    className="form-control"
                    placeholder='Input'
                    name="email"
                    value={ email }
                    onChange={ inputHandledChange }
                    autoComplete='off' 
                />

            </form>

            { ( name === 'lucio' && <Message />)}
        </>
    ) 
    
};
