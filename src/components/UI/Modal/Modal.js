import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

/* if the modal shown --> the backdrop should be shown */
class Modal extends Component {

  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  render () {
    return (
      <Auxiliary>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div 
          className={'Modal'}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}>
            {this.props.children}
        </div>
      </Auxiliary>
    )
  }
};

export default Modal;