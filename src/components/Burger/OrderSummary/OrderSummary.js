import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummary = (props) =>{
    const style = {
        textTransform:'capitalize'
    };
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey=>{
            return (
                <li key={igKey}>
                    <span style={style}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
            );
        });
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A Delicious Burger with following Ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
        </Aux>
    )
};

export default orderSummary;