import React from "react";

class Pizza extends React.Component {

pizzaClickHandler = () => {
  this.props.appClickHandler(this.props.pizza)
}

  render() {
  return(
    <tr>
      <td>{this.props.topping}</td>
      <td>{this.props.size}</td>
      <td>{this.props.vegetarian ? "Yes" : "No"}</td>
      <td><button onClick={this.pizzaClickHandler} type="button" className="btn btn-primary">Edit Pizza</button></td>
      //add onClick to button
      //once clicked, populate the form with the data
    </tr>
  )
  }
}

export default Pizza;
