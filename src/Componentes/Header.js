import {react} from 'react';
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons';


const Header = ({mostrarCompletadas, cambiarMostrarCompletadas}) => {


    const toggleCompletadas=()=>{
        cambiarMostrarCompletadas(!mostrarCompletadas);
    }

    return (
        <header className="header">
            <h1 className="header__titulo">Lista de tareas</h1>

            {
                mostrarCompletadas ?

            <button className="header__boton" onClick={()=>toggleCompletadas()}> 
                No mostrar completadas 
                <FontAwesomeIcon icon={faEyeSlash} className="header__icon-boton"/>
            </button>
                :
            <button className="header__boton" onClick={()=>toggleCompletadas()}> 
                No mostrar completadas 
                <FontAwesomeIcon icon={faEye} className="header__icon-boton"/>
            </button>

            }



        </header>
      );
}
 
export default Header;