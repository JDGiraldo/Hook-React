import { useCounter ,useFetch } from "../hooks";
import { Quote,LoadingQuote } from "./";



export const MultilpleCustomHooks = () => {
  const {counter,increment}= useCounter(1);
  
  const {data,isLoading,hasError} = useFetch(` https://api.breakingbadquotes.xyz/v1/quotes/${counter}` )
  
  const {author, quote} = !!data &&data[0];

    
  return (
    <>
    <h1>BreakingBag Outes</h1>
    <hr />

    {
        isLoading
        ?(
          <LoadingQuote/>
        )
        :(
          <Quote author={author} quote={quote}/> 
        )
    }

    <button 
    onClick={ () =>increment()} 
    disabled= {isLoading}
    className="btn btn-primary">
    Next quote
    </button>


    </>
  )
}
