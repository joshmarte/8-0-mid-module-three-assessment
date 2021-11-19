import { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      creditCard: "",
      zipcode: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.creditCard.length !== 16) {
      window.alert("Input is not valid.\nCredit card number is not valid.");
    } else if (this.state.zipcode.length !== 5) {
      window.alert("Input is not valid.\nZip code is not valid.");
    } else if (
      this.state.firstName.length === 0 ||
      this.state.lastName.length === 0
    ) {
      window.alert("Input is not valid.");
    } else {
      window.alert(
        `Purchase complete! You will be charged $${parseFloat(
          this.props.total
        ).toFixed(2)}`
      );
    }
  };

  render() {
    const { firstName, lastName, email, creditCard, zipcode } = this.state;
    return (
      <div id="checkout-container">
        <h2>Checkout</h2>
        <form onSubmit={this.handleSubmit} id="checkout">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={this.handleChange}
          ></input>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={this.handleChange}
          ></input>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={this.handleChange}
          ></input>
          <label htmlFor="creditCard">Credit Card</label>
          <input
            type="text"
            name="creditCard"
            id="creditCard"
            value={creditCard}
            onChange={this.handleChange}
          ></input>
          <label htmlFor="zipcode">Zip Code</label>
          <input
            type="text"
            name="zipcode"
            id="zipcode"
            value={zipcode}
            onChange={this.handleChange}
          ></input>
          <button type="submit">Buy Now</button>
        </form>
      </div>
    );
  }
}
