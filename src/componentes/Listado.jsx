import React from 'react'
import Cita from './Cita'

function Listado({cita}) {
  if(cita==null) return null;
    return (
    <table className='table'>
        <thead>
            <th scope='col'>#</th>
            <th scope='col'>Cita</th>
        </thead>
        <tbody>
            {cita.map(item=>(
                <Cita key={item.id} cita={item}/>
            ))}
        </tbody>
    </table>
  )
}

export default Listado