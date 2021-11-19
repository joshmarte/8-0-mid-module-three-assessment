import { Component } from "react";
import productData from "../data/productData";

export default class Display extends Component {
  constructor() {
    super();
  }

  render() {
    const displayItems = productData.map((item, index) => {
      const { name, price, description, img } = item;
      const info = { thing: name, money: price };
      return (
        <div key={index} className="cart-item">
          <h3>{name}</h3>
          <div>Price: ${Number(price).toFixed(2)}</div>
          <button
            type="submit"
            onClick={() => {
              this.props.click(info);
            }}
          >
            Add To Cart
          </button>
          <div className="img-container">
            <img src={img} alt="Cart Item"></img>
          </div>
          <div>{description}</div>
        </div>
      );
    });
    return (
      <div id="display-container">
        <h2>My Garage Sale</h2>
        <div className="products">{displayItems}</div>
      </div>
    );
  }
}
