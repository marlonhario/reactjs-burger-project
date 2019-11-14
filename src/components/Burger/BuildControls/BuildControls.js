import React from 'react';
import {BuildControlsContainer} from '../../component_style';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
    <BuildControlsContainer>
        <div className="BuildControls">
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => (
                <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.type)} 
                    removed={() => props.ingredientRemoved(ctrl.type)} 
                    disabled={props.disabled[ctrl.type]} />
            ))}
            <button className="OrderButton" 
                    disabled={!props.purchaseable}
                    onClick={props.ordered}>ORDER NOW</button>
        </div>
    </BuildControlsContainer>
);

export default buildControls;