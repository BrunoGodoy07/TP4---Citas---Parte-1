import React from 'react'
import Cita from './Cita'

function Listado(props) {
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
          props.cita.map((c)=>(
          <Cita key={c.id} datos={c} />
          ))
        }
      </tbody>
    </table>
  )
}

export default Listado