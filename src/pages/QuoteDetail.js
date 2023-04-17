import React,{Fragment} from 'react'
import { Route,useParams,Link,useRouteMatch } from 'react-router-dom';
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const DUMMY_QUOTES=[

    {id:'q1',author:'Max',text:"Learning React is Fun!"},
    {id:'q2',author:'Maxwell',text:"Learning Full stock React is Fun!"},
    {id:'q3',author:'Saran',text:"Learning Web Dvevlopement React is Fun!"}
];


const QuoteDetail = () => {
  const match=useRouteMatch();
    const params=useParams();

    const quote=DUMMY_QUOTES.find(quote=>quote.id===params.quoteId);
 
 if(!quote){
     return <p>No Quotes found</p>
 }
    return (
      <Fragment>
        <HighlightedQuote text={quote.text} author={quote.author} />
          <Route path={match.path} exact>
            <div className='centered'>
              <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link>
            </div>
          </Route>
         <Route path={`${match.path}/comments`} >
                <Comments />
         </Route>
    </Fragment>
  )
}

export default QuoteDetail