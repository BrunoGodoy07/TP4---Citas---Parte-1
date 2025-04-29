import React from 'react'

export default function Formulario() {

  return (
    <div className="row">
        <div className="col">
            <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
        </div>
        <div className="col">
        <button type="button" className="btn btn-primary">Agregar cita</button>
        </div>
    </div>
  )
}