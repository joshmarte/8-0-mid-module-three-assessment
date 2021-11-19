import { Component } from "react";

export default class Cart extends Component {
  constructor() {
    super();
  }

  render() {
    const { info } = this.props;

    const items = info.cart.map((item, i) => {
      return (
        <li key={i}>
          {item.thing}: ${item.money}
        </li>
      );
    });

    return (
      <div className="cart-container">
        <h2>Cart</h2>
        <ul>{items}</ul>
        <h3>Subtotal: ${parseFloat(info.subtotal).toFixed(2)}</h3>
        <h3>Tax: ${parseFloat(info.tax).toFixed(2)}</h3>
        <h3>Total: ${parseFloat(info.total).toFixed(2)}</h3>
      </div>
    );
  }
}
