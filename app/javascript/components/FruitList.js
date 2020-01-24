import React     from "react"
import PropTypes from "prop-types"
import Fruit     from './Fruit'

export default class FruitList extends React.Component {
  render () {
    let fruits = [];
    this.props.fruits.forEach(fruit => (   // forEach or .map
      /*
       *  `key` is required. Otherwise Warning: Each child in a list should have a unique "key" prop.
       *  `handleDelete` - to export function from Body component to Fruit component
       */
      fruits.push(<Fruit fruit={fruit} key={fruit.id} handleDelete={this.props.handleDelete} handleUpdate={this.props.handleUpdate}/>)
    ))
    
    return (
      <React.Fragment>
        <h4>All Fruits Table</h4>
        <table className="table table-sm table-striped table-hover">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {fruits}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

FruitList.propTypes = {     // Not necessary...
  fruits:       PropTypes.array,
  handleDelete: PropTypes.func,
  handleUpdate: PropTypes.func
};
