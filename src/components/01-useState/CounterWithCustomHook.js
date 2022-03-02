import React from 'react';
import '../../hooks/useCounter'

import { useCounter } from '../../hooks/useCounter'

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter(1000)
    return(
        <>
            <h1> Counter with custom hook { state } </h1>
            <hr />

            <button className="btn btn-primary ms-3" onClick={  () => increment(2) }> +1 </button>
            <button className="btn btn-outline-info mx-3" onClick={ decrement }> -1 </button>
            <button className="btn btn-outline-info" onClick={ reset }> Reset </button>         
        </>
    )
}