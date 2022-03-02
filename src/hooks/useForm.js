import { useState } from "react";


export const useForm = ( initialState = {} ) => {
    
    const [ values, setValues ] = useState( initialState )
    
    const reset = () => {
        setValues( initialState );
    }

    const inputHandledChange = ( { target }) => {
        setValues({
            ...values,
            [ target.name ]: target.value
        });
        
        /* console.log( target.name )
        console.log( target.value ) */

    }

    return [ values, inputHandledChange, reset ]
};
