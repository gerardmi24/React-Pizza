import React, { Component } from 'react';
import Pizza from '../components/Pizza';

class PizzaList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzas: [],
      topping: [],
      size: [],
      vegetarian: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas/')
    .then(resp => resp.json())
    .then(pizzaObj => {
      this.setState({
        pizzas: pizzaObj
      });
    })
  };

    renderPizza = () => {
      return this.state.pizzas.map(pizza => <Pizza topping={pizza.topping} size={pizza.size} vegetarian={pizza.vegetarian} appClickHandler={this.props.appClickHandler} />)
    }

  render(pizzaObj) {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            this.renderPizza()
            //render Pizza here
            // <Pizza topping={this.state.topping} size={this.state.size} vegetarian={this.state.vegetarian} />
          }
        </tbody>
      </table>
    );
  }
}

export default PizzaList;
