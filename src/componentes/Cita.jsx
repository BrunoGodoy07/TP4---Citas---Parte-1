import React from 'react'

export default function Cita(props) {


return (
<tr>
  <th scope='row'> {props.datos.id}</th>
  <td>{props.datos.nombre}</td>
  <td>{props.datos.apellido}</td>
</tr>
)
}