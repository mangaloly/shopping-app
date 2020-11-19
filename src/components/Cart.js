import React, { Component } from 'react';
import formatCurrency from '../util';

export default class Cart extends Component {
  render() {

    const { cartItems } = this.props;

    return (
      <div>
        {cartItems.length === 0 ? (
          <div className="cart cart-header">Cart is Empty</div>
        ) : (
            <div className="cart cart-header">
              You have {cartItems.length} in the Cart {" "}
            </div>
          )}
        <div className="cart">
          <ul className="cart-items">
            {cartItems.map(item => (
              <li key={cartItems._id}>
                <div>
                  <img src={item.image} alt={item.title} />
                </div>
                <div>
                  <div>{item.title}</div>
                  {formatCurrency(item.price)} x {item.count}
                  <button className="removeBtn" onClick={() => this.props.removeFromCart(item)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {cartItems.length !== 0 && (
          <div className="cart">
            <div className="total">
              <div>
                Total: {" "}
                {formatCurrency(
                  cartItems.reduce((a, c) => a + c.price * c.count, 0)
                )}
              </div>
              <button className="button primary">Proceed</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
