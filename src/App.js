import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm/>
        <PizzaList/>
      </Fragment>
    );
  }
}

//create pizza function
//pass function down to pizzaList
//then, pass from pizzaList to pizza
//invoke inside of pizza using (props.topping, props.size, props.vegetarian)
//Once invoked, pass information to app
//From App, pass it down to pizzaForm
//Finally, populate the form

export default App;
