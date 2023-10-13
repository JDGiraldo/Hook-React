import { useState } from "react"

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = (value = 1 ) => {
        setCounter( counter +value);
    }
    const incremet2 = (value = 1 ) => {
        setCounter( counter + value );
    }
    const decrement = ()=>{
        // if( counter === 0 ) return ;
        setCounter( counter -1 );
    }
    const decrement2 =(value =1) =>{
        setCounter( counter - value);
    }
    const reset = ()=>{
        setCounter(  initialValue);
    }



    return{
        counter,
        increment,
        decrement,
        incremet2,
        decrement2,
        reset,
    }
}