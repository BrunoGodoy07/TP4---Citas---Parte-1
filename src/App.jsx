import React, { useState } from 'react'
import Formulario from './componentes/Formulario'
import Listado from './componentes/Listado'

function App() {
  const [cita, setCita] = useState([
    {
      id:1,
      mascota:"Nina", 
      Dueño:"Martin",
      fecha: "2021-08-05",
      hora: "08:20",
      sintomas: "Le duele la pierna"
    },
    {
      id:2,
      mascota:"Sifon", 
      Dueño:"Flecha",
      fecha: "2023-08-05",
      hora: "09:24",
      sintomas: "Duerme mucho"
    },
    {
      id:3,
      mascota:"Floki", 
      Dueño:"Ari",
      fecha: "2023-10-07",
      hora: "16:15",
      sintomas: "No está comiendo" 
    }
  ]);
  
  return (
    <div className="container mt-4">
      <h1 className="text-start mb-4">Crear mi cita</h1>
      <div className="row">
        <div className="one-half column">
          <h5 className="text-start">Formulario</h5>
          <Formulario cita={cita} setCita={setCita}/>
        </div>
        <div className="one-half column">
          <h5 className="text-start">Administra tus citas</h5>
          <Listado cita={cita}/>
        </div>
      </div>
    </div>
  );
}


export default App