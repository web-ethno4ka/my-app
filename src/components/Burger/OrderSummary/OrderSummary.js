import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {     //convert object to array
    return (
      <li key={igKey}>
        <span style={{textTransform: 'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}     
      </li>);                                                                                    //output Key + value
  });



  return (
    <Auxiliary>
        <h3>Your Order</h3>
        <p>Tasty burger with following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p>Continue to Checkout?</p>
        <button>Cancel</button>
        <button>Continue</button>
    </Auxiliary>
  );

};

export default orderSummary;