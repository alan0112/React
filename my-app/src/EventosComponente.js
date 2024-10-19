import React from 'react'

export const EventosComponente = () => {

    const hasDadoClick = (e, nombre) => {
        alert("Has dado click" + nombre);
    }

    function hadDadoDobleClick() {
        alert("Has dado doble click");
    }

    function hasEntrado(){
        alert("Ha entrado");
    }

    const hasSalido = () =>{
        alert("Has salido");
    }

    const introduceNombre = () =>{
      alert("Introduce tu nombre");
    }

    const estasFuera = (e) =>{
      alert("Estas fuera");
    }
    

  return (
    <div>
        <h1>Eventos en react</h1>

        <button onClick={e => hasDadoClick(e, " Alan")}>Has click</button>

        <br/> 
        {/*Evento doble click */ }
        <button onDoubleClick={hadDadoDobleClick}>Dame doble click</button>

        <br/>


        {/*Evento click
        <button onClick={()=>{
            console.log("Esto es un boton con eveto click");
            

        }}>Dame click </button>*/}

        <div id= "caja" 
        onMouseEnter={hasEntrado}
        onMouseLeave={hasSalido}>
          {/*Evento on mouse enter on mouse leave*/}
          Pasa por encima

        </div>

        <p>
          <input type='text' 
          onFocus={introduceNombre} 
          onBlur={estasFuera}
          placeholder='Introduce tu nombre'/>
        </p>
    </div>
  )
}
