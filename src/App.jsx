import React, { useState } from 'react'
import Formulario from './componentes/Formulario'
import Listado from './componentes/Listado'

function App() {
  const [cita, setCita] = useState({id:1,nombre:"Pepe"})
  return (
    <div className='container'>
      <div className='m-5'>
        <Formulario setCita={setCita} cita={cita}/>
        <Listado cita={cita}/>
      </div>
    </div>
  )
}

export default App