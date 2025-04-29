import React from 'react'

export default function Cita(props) {
  return (
    <div key={props.datos.id} className="border border-primary rounded p-2 mb-2">
    <p><strong>#{props.datos.id}</strong></p>
    <p>Nombre: {props.datos.nombre}</p>
    <p>Apellido: {props.datos.apellido}</p>
  </div>
  )
}