import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <Fragment>
      <Link
        to='/invoice'
        className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-6'
      >
        Ny faktura
      </Link>

      <Link
        to='/invoices'
        className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-6'
      >
        Fakturor
      </Link>

      <Link
        to='/edit-profile'
        className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-12'
      >
        <i className='fas fa-user' /> <span>Profil</span>
      </Link>

      <a
        onClick={logout}
        href='#!'
        className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white'
      >
        <i className='fas fa-sign-out-alt' />{' '}
        <span className='hide-sm'>Logga ut</span>
      </a>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Link
        to='/register'
        className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-8'
      >
        Registrering
      </Link>
      <Link
        to='/login'
        className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white'
      >
        Logga in
      </Link>
    </Fragment>
  );

  return (
    <nav className='flex items-center justify-between flex-wrap bg-dark p-6'>
      <div className='w-full inline-block text-white flex-grow lg:w-auto'>
        <Link to='/'>
          <i className='fas fa-receipt' /> Fakturameistern
        </Link>
      </div>
      {!loading && (
        <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
