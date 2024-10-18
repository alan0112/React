import React from 'react'
import PropTypes from "prop-types";

export const Componente3 = (/*props*/{nombre,apellido,ficha}) => {
    
  return (
    <div>
        <p>Comunicación entre componentes</p>
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