import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/bloom.svg';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' /> <div className='logo-title'>Fashion Store</div>
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/signin'>
        SIGN IN
      </Link>
    </div>
  </div>
);

export default Header;
