import React     from "react"

const AllFruits = (props) => {
  var fruits = props.fruits.map((fruit) => {
      return(
        <div key={fruit.id}>
          <h4>{fruit.name}</h4>
          <p>{fruit.description}</p>
        </div>
      )
    })
  return(
        <div>
          {fruits}
        </div>
      )
  }

  export default AllFruits