import React, {useState } from 'react'
import './counterApp.css'

export const CounterApp = () => {
    const [ state, setState ] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 20,
        counter4: 20
    })
    const { counter1, counter2 } = state;
    
    return(
        <>
            <h1 id='contentH1' >Counter1 { counter1 }</h1>
            <h1 id='contentH1' >Counter2 { counter2 }</h1>
            <hr />

            <button className="btn btn-primary pd-10" id='buttonAumentar' 
                onClick={ () => 
                setState({...state, counter1: counter1 + 1 }) }
            >
                +1
            </button>
        </>
    )
}