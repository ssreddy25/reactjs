import React, { useState } from 'react'

const Counter = () => {
    const[count,setCount]=useState(0);

    const increment=()=>{
        setCount((perveCount)=> perveCount + 1 );
    }
    const decrement=()=>{
        setCount((perveCount)=> perveCount - 1 )
    }
  return (
    <div>
        <button  data-testid="increment" onClick={ increment}>
         +
        </button>
        <p data-testid='counter' >{count}</p>

        <button  data-testid="decrement" onClick={ decrement }>
         -
        </button>
    </div>
  )
}

export default Counter
