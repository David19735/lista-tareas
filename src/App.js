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

  const [mostrarCompletadas,cambiarMostrarCompletadas]=useState(false);


  return ( 
    <div className="contenedor">
      <Header mostrarCompletadas={mostrarCompletadas} cambiarMostrarCompletadas={cambiarMostrarCompletadas}/>
      <Formulario tareas={tareas} cambiarTareas={cambiarTareas}/>
      <ListaTareas 
      tareas={tareas} 
      cambiarTareas={cambiarTareas}
      mostrarCompletadas={mostrarCompletadas}
      />
      
    </div>
   );
}
 
export default App;