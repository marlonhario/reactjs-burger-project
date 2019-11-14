import React, {Component} from 'react';
import Aux from '../../../hoc/Auxx/Aux';
import Button from '../../UI/Button/Button';
import {ButtonContainer} from '../../component_style';

export default class OrderSummary extends Component {
    //This could be function component doesn't need to be a class
    UNSAFE_componentWillUpdate() {
        console.log('[OrderSummary] will update');
    }
    
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (<li key={igKey}><span>{igKey}</span>: {this.props.ingredients[igKey]}</li>);
            });
        return (
            <ButtonContainer>
                <Aux>
                    <h3>Your Order</h3>
                    <p>A delicious burger with the following ingredients!</p>
                    <ul>
                        {ingredientSummary}
                    </ul>
                    <p><strong>Total Price : {this.props.price}</strong></p>
                    <p>Continue to Checkout?</p>
                    <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                    <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
                </Aux>
            </ButtonContainer>
        );
    }
}


