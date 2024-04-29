import {react, useState} from 'react';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { v4 as uuidv4 } from 'uuid';


const Formulario = ({tareas,cambiarTareas}) => {

    
    const [inputTarea,cambiarInputTarea]=useState('');


    const handleInput=(e)=>{
        cambiarInputTarea(e.target.value);
    }

    const handleSubmit=(e)=>{

        e.preventDefault();

        cambiarTareas([
            ...tareas,
            {
                id:uuidv4(),
                texto:inputTarea,
                completada:false
            }
        ]);

    }





    

        //Return 
    return ( 
        <form action='' className='formulario-tareas' onSubmit={handleSubmit}>
            <input
            type='text'
            className='formulario-tareas__input'
            placeholder='Escribe la tarea'
            value={inputTarea}
            onChange={(e)=>handleInput(e)}
            />
            <button
            type='submit'
            className='formulario-tareas__btn'
            >
                <FontAwesomeIcon
                icon={faPlusCircle}
                className='formulario-tareas__icono-btn'
                />

            </button>

        </form>
     );
}
 
export default Formulario;