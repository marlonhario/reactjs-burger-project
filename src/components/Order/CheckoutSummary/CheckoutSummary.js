import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import {CheckoutSummaryContainer} from '../../component_style';

export default function CheckoutSummary(props) {
    return (
        <CheckoutSummaryContainer>
            <h1>We hoe it taste will!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="Danger" clicked>CANCEL</Button>
            <Button btnType="Success" clicked>CONTINUE</Button>
        </CheckoutSummaryContainer>
    )
}
