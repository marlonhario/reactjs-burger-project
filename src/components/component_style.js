import styled from 'styled-components';

export const CheckoutSummaryContainer = styled.div`
    text-align: center;
    width: 80%;
    margin: auto;

    @media (min-width: 600px) {
        width: 500px;
    }
`;

export const DrawerToggleContainer = styled.div`
 
    width: 40px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px 0;
    box-sizing: border-box;
    div {
        width: 90%;
        height: 3px;
        background-color: white;
    }
    @media (min-width: 500px) {
        display: none;
    }
`;

export const SideDrawerContainer = styled.div`

    .SideDrawer {
        position: fixed;
        width: 280px;
        max-width: 70%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 200;
        background-color: white;
        padding: 32px 16px;
        box-sizing: border-box;
        transition: transform 0.3s ease-out;
    }

    .SideDrawer > .Logo > img{
        width: 25% !important;
        margin-bottom: 32px;
    }

    .Open {
        transform: translateX(0);
    }

    .Close {
        transform: translateX(-100%);
    }

    @media (min-width: 500px) {
        .SideDrawer {
            display: none !important;
        }

        .DrawerToggle {
            display: none;
        }
    }
`;

export const ToolbarContainer = styled.div`

    .NavigationItems {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-flow: column;
        align-items: center;
        height: 100%;
    }

    .NavigationItem {
        margin: 10px 0;
        box-sizing: border-box;
        display: blocks;
        width: 100%;
    }

    .NavigationItem a {
        color: #8F5C2C;
        text-decoration: none;
        width: 100%;
        box-sizing: border-box;
        display: block;
    }

    .NavigationItem a:hover,
    .NavigationItem a:active,
    .NavigationItem a.active {
        color: #40A4C8;
    }

    .Logo {
        background-color: white;
        padding: 8px;
        height: 100%;
        box-sizing: border-box;
        border-radius: 5px;
    }

    .Logo img {
        height: 100%;
    }

    .Toolbar {
        height: 56px;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #703B09;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        box-sizing: border-box;
        z-index: 90;
    }

    .Toolbar nav {
        height: 100%;
    }

    @media (max-width: 499px) {
        .DesktopOnly {
            display: none;
        }
    }

    @media (min-width: 500px) {

        .NavigationItems {
            flex-flow: row;
        }
   
        .NavigationItem {
            margin: 0;
            display: flex;
            height: 100%;
            width: auto;
            align-items: center;        
        }
    
        .NavigationItem a {
            color: white;
            height: 100%;
            padding: 16px 10px;
            border-bottom: 4px solid transparent;
        }
    
        .NavigationItem a:hover,
        .NavigationItem a:active,
        .NavigationItem a.active {
            background-color: #8F5C2C;
            border-bottom: 4px solid #40A4C8;
            color: white;
        }
    }
`;

export const ButtonContainer = styled.div`
    .Button {
        background-color: transparent;
        border: none;
        color: white;
        outline: none;
        cursor: pointer;
        font: inherit;
        padding: 10px;
        margin: 10px;
        font-weight: bold;
    }

    .Button:first-of-type {
        margin-left: 0;
        padding-left: 0;
    }

    .Success {
        color: #5C9210;
    }

    .Danger {
        color: #944317;
    }
`;

export const BackdropContainer = styled.div`
    .Backdrop {
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 100;
        left: 0;
        top: 0;
        background-color: rgba(0,0,0,0.5);
    }
`;

export const ModalContainer = styled.div`
    .Modal {
        position: fixed;
        z-index: 500;
        background-color: white;
        width: 70%;
        border: 1px solid #ccc;
        box-shadow: 1px 1px 1px black;
        padding: 16px;
        left: 15%;
        top: 30%;
        box-sizing: border-box;
        transition: all .3s ease-out;
    }

    @media (min-width: 600px) {
        .Modal {
            width: 500px !important;
            left: calc(50% - 250px) !important;
        }
    }
`;

export const BuildControlsContainer = styled.div`
    .BuildControls {
        width: 100%;
        background-color: #CF8F2E;
        display: flex;
        flex-flow: column;
        align-items: center;
        box-shadow: 0 2px 1px #ccc;
        margin: auto;
        padding: 10px 0;
    }

    .BuildControl {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 5px 0;
    }

    .BuildControl button {
        display: block;
        font: inherit;
        padding: 5px;
        margin: 0 5px;
        width: 80px;
        border: 1px solid #AA6817;
        cursor: pointer;
        outline: none;
    }

    .BuildControl button:disabled {
        background-color: #AC9980;
        border: 1px solid #7E7365;
        color: #CCC;
        cursor: default;
    }

    .BuildControl button:hover:disabled {
        background-color: #AC9980;
        color: #ccc;
        cursor: not-allowed;
    }

    .label {
        padding: 10px;
        font-weight: bold;
        width: 80px;
    }

    .BuildControl .Less {
        background-color: #D39952;
        color: white;
    }

    .BuildControl .More {
        background-color: #8F5E1E;
        color: white;
    }

    .BuildControl .Less:hover, .BuildControl .Less:active {
        background-color: #DAA972;
        color: white;
    }

    .OrderButton {
        background-color: #DAD735;
        outline: none;
        cursor: pointer;
        border: 1px solid #966909;
        color: #966909;
        font-family: inherit;
        font-size: 1.2em;
        padding: 15px 30px;
        box-shadow: 2px 2px 2px #966909;
    }

    .OrderButton:hover, .OrderButton:active {
        background-color: #A0DB41;
        border: 1px solid #966909;
        color: #966909;
    }

    .OrderButton:disabled {
        background-color: #C7C6C6;
        cursor: not-allowed;
        border: 1px solid #ccc;
        color: #888888; 
    }

    .OrderButton:not(:disabled) {
        animation: enable 0.3s linear;
    }

    @keyframes enable {
        0% {
            transform: scale(1);
        }
        60% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
`;

export const BurgerContainer = styled.div`
    .Content {
        margin-top: 72px; 
    }

    .BreadBottom {
        height: 13%;
        width: 80%;
        background: linear-gradient(#F08E4A, #e27b36);
        border-radius: 0 0 30px 30px;
        box-shadow: inset -15px 0 #c15711;
        margin: 2% auto;
    }

    .BreadTop {
        height: 20%;
        width: 80%;
        background: linear-gradient(#bc581e, #e27b36);
        border-radius: 50% 50% 0 0;
        box-shadow: inset -15px 0 #c15711;
        margin: 2% auto;
        position: relative;
    }

    .Seeds1 {
        width: 10%;
        height: 15%;
        position: absolute;
        background-color: white;
        left: 30%;
        top: 50%;
        border-radius: 40%;
        transform: rotate(-20deg);
        box-shadow: inset -2px -3px #c9c9c9;
    }

    .Seeds1:after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: white;
        left: -170%;
        top: -260%;
        border-radius: 40%;
        transform: rotate(60deg);
        box-shadow: inset -1px 2px #c9c9c9;
    }
    
    .Seeds1:before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: white;
        left: 180%;
        top: -50%;
        border-radius: 40%;
        transform: rotate(60deg);
        box-shadow: inset -1px -3px #c9c9c9;
    }

    .Seeds2 {
        width: 10%;
        height: 15%;
        position: absolute;
        background-color: white;
        left: 64%;
        top: 50%;
        border-radius: 40%;
        transform: rotate(10deg);
        box-shadow: inset -3px 0 #c9c9c9;
    }
    
    .Seeds2:before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: white;
        left: 150%;
        top: -130%;
        border-radius: 40%;
        transform: rotate(90deg);
        box-shadow: inset 1px 3px #c9c9c9;
    }
    

    .Meat {
        width: 80%;
        height: 8%;
        background: linear-gradient(#7f3608, #702e05);
        margin: 2% auto;
        border-radius: 15px;
    }

    .Cheese {
        width: 90%;
        height: 4.5%;
        margin: 2% auto;
        background: linear-gradient(#f4d004, #d6bb22);
        border-radius: 20px;
    }

    .Salad {
        width: 85%;
        height: 7%;
        margin: 2% auto;
        background: linear-gradient(#228c1d, #91ce50);
        border-radius: 20px;
    }

    .Bacon {
        width: 80%;
        height: 3%;
        background: linear-gradient(#bf3813, #c45e38);
        margin: 2% auto;
    }


    .Burger {
        width: 100%;
        margin: auto;
        height: 250px;
        overflow: scroll;
        text-align: center;
        font-weight: bold;
        font-size: 1.2rem;
    }

    @media (min-width: 500px) and (min-height: 400px) {
        .Burger {
            width: 350px !important;
            height: 300px !important;
        }
    }

    @media (min-width: 500px) and (min-height: 401px) {
        .Burger {
            width: 450px !important;
            height: 400px !important;
        }
    }

    @media (min-width: 1000px) and (min-height: 700px) {
        .Burger {
            width: 700px !important;
            height: 600px !important;
        }
    }
   
`;