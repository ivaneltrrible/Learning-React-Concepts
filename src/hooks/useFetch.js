/* -------------------------------------------------------------------------- */
/*                           Pruebas con custom hook                          */
/* -------------------------------------------------------------------------- */
import { useEffect, useRef, useState } from "react"


export const useFetch = ( url ) => {
    const [state, setState] = useState({ data: null, loading: true, error: null });

    const isMounted = useRef(true)

    
    /*     Limpia el componente al desmontarlo para que no ejecute el setState    */
    /* -------------------------------------------------------------------------- */
    useEffect(() => {
        return( () => {
            isMounted.current = false;
        })
    }, [])

    useEffect(() => {
        setState({ data: null, loading: true, error: null }); // Resetea los valores al estar cargando datos
        setTimeout(() => { // Se agrega setTimeout para simular una peticion con retardo
            fetch(url)
            .then( res => res.json())
            .then( data => {
                if(isMounted.current) setState({ data: data, loading: false, error: null });
            })
        }, 1000);
    }, [url])

    return state
}

