import React from 'react'
import { useHistory } from 'react-router-dom';
import useHttp from '../components/hooks/use-http';
import { addQuote } from '../components/lib/api';
import QuoteForm from '../components/quotes/QuoteForm'


const NewQuote = () => {
  const { sendRequest ,status} =useHttp(addQuote);
    const history=useHistory();

    const addQuoteHandler=(quoteData)=>{
        sendRequest(quoteData);
        history.push('/quotes');
        
    };
  return (
    <QuoteForm onAddQuote={addQuoteHandler} />
  )
}

export default NewQuote