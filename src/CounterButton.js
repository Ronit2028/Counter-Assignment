import React from 'react'
import { useDispatch } from 'react-redux'
import { increment, decrement } from './redux/actions/counterActions'
const CounterButton = () => {

    const dispatch = useDispatch()
    function handleClickIncrement(){
        dispatch(increment())
    }
    function handleClickDecrement(){
        dispatch(decrement())
    }

  return (
    <div><button onClick={handleClickIncrement}>Increment</button><button onClick={handleClickDecrement}>Decrement</button></div>
  )
}

export default CounterButton