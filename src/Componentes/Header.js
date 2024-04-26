
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Header = () => {
    return (
        <header className="header">
            <h1 className="header__titulo">Lista de tareas</h1>
            <button className="header__boton"> 
                No mostrar completadas 
                <FontAwesomeIcon icon={faEye} className="header__icon-boton"/>
            </button>



        </header>
      );
}
 
export default Header;