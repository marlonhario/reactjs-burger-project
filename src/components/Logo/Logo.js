import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';

export default function Logo(props) {
    return (
        <div className="Logo" style={{height: props.height}}>
            <img src={burgerLogo} alt="Minute Burger"/>
        </div>
    )
}
