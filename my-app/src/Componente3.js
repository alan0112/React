import React from 'react'
import PropTypes from "prop-types";

export const Componente3 = (/*props*/{nombre,apellido,ficha}) => {
    
  return (
    <div>
        <h1>Comunicación entre componentes</h1>
        <ul>
          <li>{/*props.*/nombre} </li>
          <li>{apellido} </li>
          <li>{ficha.salud}  </li>
        </ul>
    </div>
  )
}

Componente3.propTypes = {
  nombre: PropTypes.string,
  apellido : PropTypes.string,
  ficha : PropTypes.object,
}