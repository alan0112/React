import React from 'react'

export const Componente2 = () => {

    let libros = ["Elder","Desgarradura", "El señor de los anillos"];
    let libros2 = ["a","b","c"];
    let content;

  return (
    <div className='Componente2'>
    {libros.length >= 1 ?
    (
        <ul>
            {libros.map((libro,indice)=>{
                return <li key={indice}>{libro}</li>
            })
            
        }
        </ul>)
        :(
            <p>No hay libros</p>
        )
    }

    </div>
  )
}
