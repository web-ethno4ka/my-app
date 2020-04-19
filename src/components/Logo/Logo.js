import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import './Logo.css';

const logo = (props) => (
  <div className={'Logo'}>
    <img src={burgerLogo} alt="Burger Builder logo"/>
    <p>Burger Builder</p>
  </div>
);

export default logo;