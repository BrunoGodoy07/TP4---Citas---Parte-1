import React from 'react'

export default function Formulario() {

  return (
    <div class="row">
        <div class="col">
            <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
        </div>
        <div class="col">
        <button type="button" class="btn btn-primary">Primary</button>
        </div>
    </div>
  )
}