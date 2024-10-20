import React ,{useState} from 'react'

export const MiPrimerEstado = () => {

    /*Problema
    let nombre = "El alan";

    const cambiarNombre = (e) => {
        nombre= "ortro alan";
    }
    */

    //Resolucion

    const[nombre,setNombre] = useState("El alan");

    const cambiarNombre = (e, nombreFijo) =>{
        setNombre(nombreFijo)

    }

  return (
    <div>
        <h3>MiPrimerEstado</h3>
        <strong className='label'>
            {nombre}
        </strong>
        <br/>
        <button onClick={e => cambiarNombre(e, "Otro Alan")}>Haz click para cambiar el nombre</button>
        <input type='text' onKeyUp={e => cambiarNombre(e,e.target.value)} placeholder='Cambiar el nombre'/>
    </div>
  )
}
