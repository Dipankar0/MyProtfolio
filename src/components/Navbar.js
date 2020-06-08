import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../../src/img/logo.jpeg';

const Navbar = props => {
  return (
    <nav className='navbar bg-primary'>
      <div style={{ textAlign: 'center' }}>
        <Link to='/'>
          <img
            src={logo}
            style={{
              width: '40px',
              height: '40px',
              marginTop: '6px',
              display: 'block',
              border: '1px solid'
            }}
            alt=''
            rounded
          />
        </Link>
      </div>
    </nav>
  );
};

Navbar.propTypes = {};

export default Navbar;
