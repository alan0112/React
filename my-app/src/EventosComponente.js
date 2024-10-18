import React from 'react'

export const EventosComponente = () => {

    function hasDadoClick(){
        alert("Has dado click");
    }

  return (
    <div>
        <h1>Eventos en react</h1>
        <button onClick={hasDadoClick}>Dame click</button>
        {/*Evento click
        <button onClick={()=>{
            console.log("Esto es un boton con eveto click");
            

        }}>Dame click </button>*/}
    </div>
  )
}
