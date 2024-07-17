import './App.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css';


export default function Home() { 
    const [valor, setValor] = useState(0)


   const sumar =  () =>  {
    const nuevoValor = valor + 1 
        setValor(nuevoValor );
        actualizarValor(nuevoValor);
    };

    const restar =  () =>  {
        const nuevoValor = valor - 1 
        setValor(nuevoValor);
        actualizarValor(nuevoValor);
    };

   

  return (

   <>
      <div className='container-all'>
        <div className='container-suma' >
          <p>Numero de clics:</p>
            <span id="valor">{valor} </span>
        </div>

          
        <button onClick={sumar}>Haz click</button>
    </div>
   </>
  )
}
