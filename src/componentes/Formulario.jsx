import React from 'react'

export default function Formulario() {
  return (
    <div className="p-3 border border-warning rounded">
      <div className="row g-2">
          <div className="col">
              <input type="text" className="form-control" placeholder="First name" />
          </div>
          <div className="col">
              <input type="text" className="form-control" placeholder="Last name" />
          </div>
          <div className="col">
              <button type="button" className="btn btn-primary w-100">Agregar cita</button>
          </div>
      </div>
    </div>
  );
}
