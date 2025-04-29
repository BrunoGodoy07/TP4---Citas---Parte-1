import React from 'react'

export default function Cita(props) {
  return (
    <div className='cita'>
    <p> #{props.datos.id}</p> 
    <p>Mascota: <span>{props.datos.mascota}</span></p>
    <p>Dueño: <span>{props.datos.Dueño}</span></p>
    <p>Fecha: <span>{props.datos.fecha}</span></p>
    <p>Hora: <span>{props.datos.hora}</span></p>
    <p>Sintomas: <span>{props.datos.sintomas}</span></p>
    <button className="button elimnar u-full-width">Eliminar ×</button>
  </div>
  )
}