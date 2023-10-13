import {useCounter} from '../hooks/useCounter'

export const CounterWithCustomHoks = () => {
  
  const {counter, increment, incremet2, decrement, decrement2 , reset} = useCounter();

  
    return (
    <>
    <h1>Counter with hook: {counter}</h1>
    <hr />

    <button className="btn btn-primary" onClick={()=> increment (2) }>+1</button>
    <button className="btn btn-primary" onClick={ decrement }>-1</button>
    <button className="btn btn-primary" onClick={ reset }>reset</button>
    <button className="btn btn-primary" onClick={() => incremet2(2) }>+2</button>
    <button className="btn btn-primary" onClick={() => decrement2(2) }>-2</button>
    </>
  )
}
