import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

import '../02--useEffect/effects.css'

export const RealExampleRef = () => {
    const [ show, setShow ] = useState(true);
    //const hideShowButton = document.querySelector('#hideShowButton');
    const handleHideShowButton = (observer) => {
        setShow(!show);
    }
    return(
        <>
            <h1>Real Example with Ref Hook</h1>
            <hr />

            { show && <MultipleCustomHooks />}

            <button 
                id="hideShowButton" 
                className="btn btn-outline-success d-block mt-5"
                onClick={ handleHideShowButton }            
            >
                Show/Hide
            </button>
            
        </>
    )
};
