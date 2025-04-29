import React from 'react'
import Cita from './Cita'

function Listado(props) {
  if(props.cita==null) return null;
    return (
      <div className="p-3 border border-secondary rounded text-start">
      {
        props.cita.map((c)=>(
          <Cita key={c.id} datos={c} />
        ))
      }
    </div>
  )
}

export default Listado