import React ,{useState} from 'react'
import PropTypes from "prop-types";

export const Ejercicio = ({year}) => {

    
    const[año,setYear] = useState(year);

    const cambiarAñoSiguiente = (e) =>{
        setYear(año+1)

    }

    const cambiarAñoAnterior = (e) =>{
        setYear(año-1)

    }

    const cambiarAño = (e) =>{
        let dato = parseInt(e.target.value);

        if (Number.isNaN(dato)) {
            setYear(dato);
        }else{
        setYear(year);
        }
    }


  return (
    <div>
        <h3>Ejercicio año</h3>
        <strong className='label1'>
            {año}
        </strong>
        <br/>
        <button onClick={cambiarAñoAnterior}>Año anterior</button>
        <button onClick={cambiarAñoSiguiente}>Año siguiente</button>
        <br/>
        <input type='text' onChange={cambiarAño} placeholder='Cambiar año manualmente'/>
    </div>
  )
}

Ejercicio.propTypes = {
    year: PropTypes.number.isRequired,
  }