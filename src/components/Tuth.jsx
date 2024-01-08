import  { Fragment, useContext } from 'react'
import { ValuContext } from './Home';

export default function Tuth() {
  
  let valu=useContext(ValuContext)
  console.log(valu);
  return (
    <Fragment>
     <h1>{valu}</h1>
    </Fragment>
  )
}
