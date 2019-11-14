import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import { SideDrawerContainer, 
         ToolbarContainer, 
         BackdropContainer } from '../../component_style';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxx/Aux';

export default function SideDrawer(props) {
    let attachedClasses = ["SideDrawer", "Close"];
    if (props.open) {
        attachedClasses = ["SideDrawer", "Open"];
    }
    return (
        <Aux>
            <BackdropContainer>
                <Backdrop show={props.open} clicked={props.closed} />
            </BackdropContainer>
            <SideDrawerContainer>
                <div className={attachedClasses.join(' ')}>
                    <Logo />
                    <ToolbarContainer>
                        <nav>
                            <NavigationItems />
                        </nav>
                    </ToolbarContainer>
                </div>
            </SideDrawerContainer>
        </Aux>
    )
}
