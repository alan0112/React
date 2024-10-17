//Importar modelosd e react/dependencias
//Se el componente principal de React
import React, {Fragment} from "react";


//Funcion del componente
const MiComponente = () => {
    return( 
    <>    
    <h1>Este es un componente</h1>
    <p> Esto es un paragraph</p>
    </>
    )
};


function MiComponente2() {
    return( 
        <Fragment>    
        <h1>Este es otro componente</h1>
        <p> Esto es otro paragraph</p>
        </Fragment>
        );
}

//Usa variables definidas
function MiComponente3() {

    let nombre = "Alan";
    let web= "www.google.com";
    let usuario ={
        nombre:"Otro alan",
        apellido:"eyy",
        edad: "12",
    };
    return( 
        <div className="componenteVariables">    
        <h3>Datos del usuario</h3>
        <ul>
            <li>Nombre: <strong>{nombre}</strong></li>
            <li>Web: <strong>{web}</strong></li>
            <li>Usuario completo: {JSON.stringify(usuario)}</li>
            <li>Usuario del arreglo: {usuario.nombre}</li>
        </ul>
        </div>
        );
}

//Export

export default MiComponente;
export {MiComponente2,MiComponente3};

