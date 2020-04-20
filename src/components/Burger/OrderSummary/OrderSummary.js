import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  render () {
    const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {     //convert object to array
      return (
        <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>{igKey}</span>:{this.props.ingredients[igKey]}     
        </li>);                                                                                    //output Key + value
    });

    return (    
    <Auxiliary>
      <h3>Your Order</h3>
      <p>Tasty burger with following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p><strong>Total price: {this.props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
      <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
    </Auxiliary>)
  }
};

export default OrderSummary;