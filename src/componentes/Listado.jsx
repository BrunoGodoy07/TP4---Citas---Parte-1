import React from 'react'
import Cita from './Cita'

function Listado(props, setCita) {
  if(props.cita==null) return null;
    return (
      <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
        </tr>
      </thead>
      <tbody>
            {
              props.cita.map((c)=>{
                {console.log(c)}
                <Cita key={c.id} nombre={c.nombre} apellido={c.apellido} setCita={setCita}/>            
              }) 
            }
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>John</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Listado