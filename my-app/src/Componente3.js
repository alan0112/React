import React from 'react'

export const Componente3 = (props) => {
    console.log(props);
  return (
    <div>
        <h3>Comunicación entre componentes</h3>
        <ul>
            <li>{props.nombre}</li>
            <li>{props.animal}</li>
        </ul>
    </div>
  )
}
