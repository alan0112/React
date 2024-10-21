import React, { useEffect, useState } from 'react'
import { AvisoComponent } from './AvisoComponent';

export const PruebasComponent = () => {

    const [usuario, setUsuario]= useState("Alan");
    const [fecha, setFecha]= useState("01-01-2001");
    const [contador,setContador] =useState(0);

    const modUsuario = (e) =>{
        setUsuario(e.target.value);
        
    }

    const cambiarFecha = (e) =>{
        setFecha(new Date().toLocaleDateString())


    }

   
    //Con los corchetes solo se ejecuta una vez
    useEffect (()=>{
        console.log("Has cargado el componente");
        
    },[]);

     //Con los corchetes solo se ejecuta una vez
     useEffect (()=>{
        
        
        setContador(contador+1);
        // eslint-disable-next-line no-useless-concat
        console.log("Has cargado el componente" + "" +contador);
    },[ usuario]);


  return (
    <div>
        <h1>Pruebas Efecct</h1>
        <strong className={contador>=10 ? 'label label1' : 'label'}>{usuario}</strong>
        <br/>
        <strong className='label1'>{fecha}</strong>
        <p>
        <input type='text' 
        onChange={modUsuario}
        placeholder='Cambia nombre'/>
        <button onClick={cambiarFecha}>Cambia fecha</button>
        </p>
        
        {/*contador >= 10 ? "Hemos superado el 20 en el contador" : "nada"*/}
        {usuario == "El alansote" && <AvisoComponent/>}
    </div>
  )
}
