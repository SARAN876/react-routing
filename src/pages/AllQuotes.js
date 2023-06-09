import React from 'react'
import QuoteList from '../components/quotes/QuoteList';


const DUMMY_QUOTES=[

    {id:'q1',author:'Max',text:"Learning React is Fun!"},
    {id:'q2',author:'Maxwell',text:"Learning Full stock React is Fun!"},
    {id:'q3',author:'Saran',text:"Learning Web Dvevlopement React is Fun!"}
];


const AllQuotes = () => {
  return (
    <QuoteList quotes={DUMMY_QUOTES} />
  )
}

export default AllQuotes;