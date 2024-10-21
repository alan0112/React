import React, { useEffect } from 'react'

export const AvisoComponent = () => {

    useEffect(()=>{
        //Cuando el componente se monta solo se ejcuta una vez por el []
        alert("El componente AvisoComponent; esta montado");

        return () => {
            alert("Component desmontad");
        }
    },[]);

  return (
    <div>
        <h1>Saludos el alansote</h1>
        <button onClick={(e) =>{
            alert("Bienvenido")
        }}>Mostart alerta</button>

    </div>
  )
}
