import React, { useState } from 'react'
import Formulario from './componentes/Formulario'
import Listado from './componentes/Listado'

function App() {
  const [cita, setCita] = useState([{id:1,nombre:"Pepe", apellido:"Gonzales"},{id:2,nombre:"Martin", apellido:"Grzenda"}])
  return (
    <div className='container'>
      <div className='m-5'>
        <Formulario  cita={cita} setCita={setCita}/>
      </div>
      <div className='m-5'>
        <Listado cita={cita}/>
      </div>
    </div>
  )
}

export default App