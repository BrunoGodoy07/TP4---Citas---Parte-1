import React, { useState } from 'react'
import Formulario from './componentes/Formulario'
import Listado from './componentes/Listado'

function App() {
  const [cita, setCita] = useState([{id:1,nombre:"Pepe", apellido:"Gonzales"},{id:2,nombre:"Martin", apellido:"Grzenda"}]);
  
  return (
    <div className="container mt-4">
      <h1 className="text-start mb-4">Citas</h1>
      <div className="row">
        <div className="col-md-6 border-end pe-4">
          <h5 className="text-start">Formulario</h5>
          <Formulario cita={cita} setCita={setCita}/>
        </div>
        <div className="col-md-6 ps-4">
          <h5 className="text-start">Listado</h5>
          <Listado cita={cita}/>
        </div>
      </div>
    </div>
  );
}


export default App