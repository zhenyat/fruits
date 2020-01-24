import React     from "react"
import Body from './Body'

const Main = (props) => {
  return(
    <div className='container'>
      <div className='row'>
        <div className='col-sm-8 col-sm-offset-2'>
          <h1>Fruits are great!</h1>
        </div>
      </div>
      <Body />
    </div>
  )
}
export default Main