import React from 'react'
import { useForm } from '../../hooks/useForm'
import Swal from 'sweetalert2'
import PropTypes from 'prop-types'

export const TodoAdd = ({ handleAddTodo }) => {

     /* ------------------------ Manejador de formularios ------------------------ */
    const [{ descripcion }, inputHandledChange, reset ] = useForm({
        descripcion: ''
    })
    /* -------------------------------------------------------------------------- */
    /*                      Funcion de Submit (agregar TODO)                      */
    /* -------------------------------------------------------------------------- */
    const handleSubmit = (e) => {
        e.preventDefault();

        if( descripcion.trim().length <= 1 ) { 
            Swal.fire({
                title: 'Alert',
                text: 'El TOD debe de contener mas de 2 caracteres',
                icon: 'info',
                confirmButtonText: 'Cool'
            })
            reset();
            return 
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: descripcion,
            done: false
        }
        handleAddTodo( newTodo );
        reset();

    }
    return (
        <>
            <form onSubmit={ handleSubmit }>
                        <h4>Agregar TODO</h4>
                        <hr />

                        <input 
                            type="text"
                            autoComplete="off"
                            placeholder="Aprender......"
                            name="descripcion"
                            className="form-control"
                            onChange={ inputHandledChange }
                            value={ descripcion }
                        >
                        </input>

                        <button type="submit" className="btn btn-outline-primary d-block mt-2 form-control">Agregar</button>
                    </form>
        </>
    )
}

TodoAdd.propTypes = {  }

