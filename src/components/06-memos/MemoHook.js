import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounter } from '../../hooks/useCounter'

//import { Small } from './Small'

import '../02--useEffect/effects.css'

export const MemoHook = () => {
    const { counter, increment } = useCounter( 2000 );
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo( () => procesoPesado( counter ), [ counter ]);

    return (
        <>
            <h1>Memo Hook</h1>
            <h3> Counter: <small> {counter} </small> </h3>
            <hr />

            <pre> { memoProcesoPesado } </pre>

            <button
                className="btn btn-outline-primary me-3"
                onClick={ increment }
            >
                +1
            </button>

            <button 
                className="btn btn-outline-success"
                onClick={ () => {
                    setShow( !show )
                }}
            >
                Hide/Show { JSON.stringify( show ) }
            </button>
        </>
    )
}
