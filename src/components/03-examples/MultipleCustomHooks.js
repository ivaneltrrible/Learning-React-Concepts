import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import '../02--useEffect/effects.css'

export const MultipleCustomHooks = () => {

    const {counter, increment } = useCounter(1)
    
    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`
    const { data, loading, error } = useFetch(url);
    const { author, quote} = !!data && data[0];

    const ButtonNextQuotes = ( ) => {
        return(
            loading ? (<button className="btn btn-primary disabled">Ir al siguiente</button>) : (<button className="btn btn-primary" onClick={ increment} > Ir al siguiente </button>)
        )
    }
    //console.log(data[0]);
    return(
        <>
            <h1>Breaking Bad API Quotes</h1>
            <hr />

            {
                loading
                    ? 
                    (
                        <>
                            <div className="alert alert-info text-center">
                                    Loading....
                            </div>
                            <ButtonNextQuotes  />
                        </>
                    )
                    : 
                    (
                        <>
                            <blockquote className="text-end blockquote">
                                <p className="mb-3">{quote}</p>
                                <figcaption className="blockquote-footer"> {author} </figcaption>
                            </blockquote>
                            <ButtonNextQuotes  />
                        </>
                    )
            }

            
        </>
    )
};
