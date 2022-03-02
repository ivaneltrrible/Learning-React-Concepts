import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';
//import { Message } from './Message';

import './effects.css'

export const FormWithCustomHook = () => {

    /* const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
    }); */
    
    /* const inputHandledChange = ( { target }) => {
        setFormState({
            ...formState,
            [ target.name ]: target.value
        });
        
        /* console.log( target.name )
        console.log( target.value ) */

    //} 

    const userData = {
        name: '',
        email: '',
        password: '',
    }

    const [ values, inputHandledChange ] = useForm( userData )
    const { name, email, password } = values;

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(values);
    }

    return(
        <>
            <h1> FormWithCustomHook </h1>
            <hr />

            <form onSubmit={ handleSubmit } className="form-group">
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
                    className="form-control mb-3"
                    placeholder='Input'
                    name="email"
                    value={ email }
                    onChange={ inputHandledChange }
                    autoComplete='off' 
                />
                <input 
                    type="password" 
                    className="form-control mb-3"
                    placeholder='******'
                    name="password"
                    value={ password }
                    onChange={ inputHandledChange }
                    autoComplete='off' 
                />

                <button className="btn btn-primary">
                    Guardar Data
                </button>

            </form>

        </>
    ) 
    
};
