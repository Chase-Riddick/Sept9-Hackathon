
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  return (
    <div className='nav-container'>
    <Nav className='nav'>
      <Nav.Item>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
      </Nav.Item>

      <Nav.Item>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
      </Nav.Item>

      <Nav.Item>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
      </Nav.Item>

      <Nav.Item>
        <NavLink to='/users' exact={true} activeClassName='active'>
              Users
        </NavLink>
      </Nav.Item>

      <Nav.Item>
            <LogoutButton />
      </Nav.Item>

    </Nav>
    </div>
  );
}

export default NavBar;
