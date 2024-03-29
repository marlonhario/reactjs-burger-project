import React, {Component} from 'react';
import {ModalContainer, BackdropContainer} from '../../component_style';
import Aux from '../../../hoc/Auxx/Aux';
import Backdrop from '../Backdrop/Backdrop';

export default class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        // if (nextProps.show !== this.props.show) {
        //     return true;
        // }

        return nextProps.show !== this.props.show;
    }

    UNSAFE_componentWillUpdate() {
        console.log('[Modal] wil update');
    }
    render () {
        return (
            <ModalContainer>
                <BackdropContainer>
                    <Aux>
                        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                        <div 
                            className="Modal"
                            style={{
                                transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                                opacity: this.props.show ? '1' : '0'
                            }}>
                            {this.props.children}
                        </div>
                    </Aux>
                </BackdropContainer>
            </ModalContainer>
        )
    }
}
