import "./App.css";
import { Component } from "react";
import Display from "./components/Display";
import Cart from "./components/Cart";
import Form from "./components/Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cart: [],
      subtotal: 0,
      tax: 0,
      total: 0,
    };
  }

  //handleClick for Display to Cart
  handleAddClick = (items) => {
    let newCart = [...this.state.cart, items];
    this.setState({
      cart: newCart,
      subtotal: this.state.subtotal + items.money,
      tax: this.state.tax + items.money * 0.05,
      total: this.state.total + (items.money + items.money * 0.05),
    });
  };

  render() {
    return (
      <div className="app-container">
        <Display click={this.handleAddClick} />
        <Cart info={this.state} />
        <Form total={this.state.total} />
      </div>
    );
  }
}

export default App;
