import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {

    const [usuarios, setUsuario] = useState([]);

    //Generico basico que gernere ese array del estado
    const getUsuariosEstatico = () => {
        setUsuario([
            {
                "id": 1,
                "email": "michael.lawson@reqres.in",
                "first_name": "Michael",
                "last_name": "Lawson",
            },
            {
                "id": 2,
                "email": "lindsay.ferguson@reqres.in",
                "first_name": "Lindsay",
                "last_name": "Ferguson",
            },
            {
                "id": 3,
                "email": "tobias.funke@reqres.in",
                "first_name": "Tobias",
                "last_name": "Funke",
            }
        ])
    }

    useEffect(() => {
        getUsuariosEstatico();
    }, []);


    return (
        <div>
            <h2>Listado de usuario con Ajax</h2>
            <ol className='usuarios'>
                {
                    usuarios.map(usuario =>{
                        return <li key={usuario.id} >{usuario.first_name} {usuario.last_name} </li>
                    })
                }
            </ol>
        </div>
    )
}
