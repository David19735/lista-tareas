import './App.css';
import React,{useState} from 'react';
import Header from "./Componentes/Header";
import Formulario from './Componentes/Formulario';
import ListaTareas from './Componentes/ListaTareas';


const App = () => {

  const [tareas,cambiarTareas]=useState([
   {
    id:1,
    texto:'Programar',
    completada:false
   },
   {
    id:2,
    texto:'Lavar',
    completada:true
   }
  ]);


  return ( 
    <div className="contenedor">
      <Header/>
      <Formulario tareas={tareas} cambiarTareas={cambiarTareas}/>
      <ListaTareas tareas={tareas} cambiarTareas={cambiarTareas}/>
      
    </div>
   );
}
 
export default App;