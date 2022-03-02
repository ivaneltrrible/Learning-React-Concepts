import React, { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import '../02--useEffect/effects.css'
import './layout.css'

export const Layout = () => {

    const {counter, increment } = useCounter(1)
    
    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`
    const { data, loading, error } = useFetch(url);
    const { quote} = !!data && data[0];

    const ButtonNextQuotes = ( ) => {
        return(
            loading ? (<button className="btn btn-primary disabled">Ir al siguiente</button>) : (<button className="btn btn-primary" onClick={ increment} > Ir al siguiente </button>)
        )
    }

    const pTag = useRef();

    useLayoutEffect( () => {
        setboundingState(pTag.current.getBoundingClientRect())
    }, [quote]);

    const [boundingState, setboundingState] = useState();

    //console.log(boundingState);
    return(
        <>
            <h1>LayoutuseEffect</h1>
            <hr />
            <blockquote ref={pTag}  className="text-end blockquote">
                <p className="mb-3">{quote}</p>
            </blockquote>
            <pre>
                { JSON.stringify(boundingState, null, 3) }
            </pre> 
            <ButtonNextQuotes  />    
            
            
            
        </>
    )
};
