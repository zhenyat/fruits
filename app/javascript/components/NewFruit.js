import React from "react"

const NewFruit = (props) => {
  let formFields = {}
 
  return(
    <form onSubmit={ 
      (e) => {props.handleFormSubmit(
                formFields.name.value, 
                formFields.description.value); 
              e.target.reset();
             }
    }>
      <div className="form-row">
        <div className="col-md-3">
          <input ref={input => formFields.name = input} className="form-control" placeholder='Enter the name of the item'/>
        </div>
        <div className="col-md-6">
          <input ref={input => formFields.description = input} className="form-control" placeholder='Enter a description' />
        </div>
        <div className="col-md-1">
          <button className="btn btn-primary">Add</button>
        </div>
      </div>
    </form>
  )
}
export default NewFruit