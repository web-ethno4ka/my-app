import React from 'react';
import './Toolbar.css';
import Logo from '../../../components/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
  <header className={'Toolbar'}>
    <div>Menu</div>
      <Logo height="50%" />
    <nav className={'DesktopOnly'}>
        <NavigationItems />
    </nav>
  </header>
);

export default toolbar;