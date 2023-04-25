import React from 'react'
import { useSelector } from 'react-redux'
const CounterDisplay = () => {
  
    const count = useSelector((state)=>state)
  
    return (
        <>
        <h2>Count : {count}</h2>
        </>
  )
}

export default CounterDisplay