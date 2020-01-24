import React from "react"
import AllFruits from './AllFruits'
import FruitList from './FruitList'
import NewFruit from './NewFruit'

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {fruits: []};

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewFruit      = this.addNewFruit.bind(this)
    this.handleDelete     = this.handleDelete.bind(this)
    this.removeFromList   = this.removeFromList.bind(this)
    this.handleUpdate     = this.handleUpdate.bind(this);
    this.updateFruit      = this.updateFruit.bind(this)
  }

  handleUpdate(fruit){
    fetch(`http://localhost:3000/fruits/${fruit.id}`, 
    {
      method: 'PUT',
      body: JSON.stringify({fruit: fruit}),
      headers: {'Content-Type': 'application/json'}
    }).then((response) => {this.updateFruit(fruit)})
  }
  updateFruit(fruit){
    let newFruits = this.state.fruits.filter((f) => f.id !== fruit.id)
    newFruits.push(fruit)
    this.setState({fruits: newFruits})
  }

  handleDelete(id){
    fetch(`http://localhost:3000/fruits/${id}`, 
    {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'}
    }).then((response) => {this.removeFromList(id)})
  }

  // Handles deleting item from the state, 
  // so it is immediately removed from the page WITHOUT a refresh
  removeFromList(id){
    let newFruits = this.state.fruits.filter((fruit) => fruit.id !== id)
    this.setState({fruits: newFruits})
  }

  handleFormSubmit(name, description){
    let body = JSON.stringify({fruit: {name: name, description: description} })

    fetch('http://localhost:3000/fruits', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => {return response.json()})
      .then((fruit)=>{this.addNewFruit(fruit)})
  }

  addNewFruit(fruit){
    this.setState({
      fruits: this.state.fruits.concat(fruit)
    })
  }

  componentDidMount(){
    fetch('/fruits.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ fruits: data }) });
  }

  render(){
    return(
      <React.Fragment>
        <NewFruit handleFormSubmit={this.handleFormSubmit} />
        {/* <AllFruits fruits={this.state.fruits} /> */}
        <FruitList fruits={this.state.fruits} handleDelete={this.handleDelete} handleUpdate = {this.handleUpdate} />
      </React.Fragment>
    )
  }
}

