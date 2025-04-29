import React from 'react'

function Cita({Cita}) {
  return (
    <tr>
        <th scope='row'> {Cita.id}</th>
        <th>{Cita.nombre}</th>
    </tr>
  )
}

export default Cita