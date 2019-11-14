import React from 'react';
import {ToolbarContainer} from '../../component_style';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

export default function Toolbar(props) {
    return (
        <ToolbarContainer>
            <header className="Toolbar">
                <DrawerToggle clicked={props.drawerToggleClicked} />
                <Logo height="80%" />
                <nav className="DesktopOnly">
                    <NavigationItems />
                </nav>
            </header>
        </ToolbarContainer>
    )
}
