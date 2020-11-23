import React from "react";

const Pizza = (props) => {
  console.log(props)
  return(
    <tr>
      <td>{props.topping}</td>
      <td>{props.size}</td>
      <td>{props.vegetarian ? "Yes" : "No"}</td>
      <td><button type="button" className="btn btn-primary">Edit Pizza</button></td>
      //add onClick to button
      //once clicked, populate the form with the data
    </tr>
  )
}

export default Pizza;
