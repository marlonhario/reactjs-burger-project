import React from 'react';
import {DrawerToggleContainer} from '../../../component_style';

export default function DrawerToggle(props) {
    return (
        <DrawerToggleContainer onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </DrawerToggleContainer>
    )
}
