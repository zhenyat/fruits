import React from "react"
import PropTypes from "prop-types"

export default class Fruit extends React.Component {
  constructor(props){
    super(props);
    this.state      = {editable: false}
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit(){
    if(this.state.editable){
       let name = this.name.value
       let description = this.description.value
       let id = this.props.fruit.id
       let fruit = {id: id, name: name, description: description}
       this.props.handleUpdate(fruit)
     }
     this.setState({
       editable: !this.state.editable
     })
   }

  render () {
    const fruit       = this.props.fruit;
    const name        = this.state.editable ? <td><input type='text' className='col-md-12' ref={input => this.name = input} defaultValue={fruit.name}/></td>:<td>{fruit.name}</td>
    const description = this.state.editable ? <td><input type='text' className='col-md-12' ref={input => this.description = input} defaultValue={fruit.description}/></td>:<td>{fruit.description}</td>
    return (
      <tr>
        {name}
        {description}
        <td>
        <button className='btn btn-info btn-sm' onClick={() => this.handleEdit(fruit)}>{this.state.editable? 'Submit' : 'Edit'}</button>
        <button className="btn btn-danger btn-sm" onClick={() => {if(window.confirm('arwe you sure?')){this.props.handleDelete(this.props.fruit.id)};}}>Delete</button>

        </td>
      </tr>
    );
  }
}

Fruit.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string
};
