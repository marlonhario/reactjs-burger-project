import React from 'react'

export default function NavigationItem(props) {
    return (
        <li className="NavigationItem">
            <a href={props.link} 
               className={props.active ? "active" : null}>{props.children}</a>
        </li> 
    )
}
