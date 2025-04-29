import React from 'react'

export default function Cita({ key, nombre, apellido}) {
  return (
    <tr>
        <th scope='row'> {key}</th>
        <td>{nombre}</td> 
        <td>{apellido}</td> 
    </tr>
  )
}

{/* <TableRow key={key}> // <--- I mean this section
<TableCell> {item.id} </TableCell>
<TableCell> {item.name} </TableCell>
<TableCell> {item.last_name} </TableCell>
</TableRow> */}