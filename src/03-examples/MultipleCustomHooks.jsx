import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {
    const {counter,increment} = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );
 
  

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {
      isLoading ? (
        <LoadingQuote/>
      ) : (
        <Quote name={data.name} status={data.status}/>
      )}
      <button className="btn btn-primary" onClick={() => increment()} disabled={isLoading}>
        Next Character 
      </button>
    </>
  );
};
