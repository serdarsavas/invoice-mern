import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <Fragment>
      <h1 className='large text-primary'>Användarpanel</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Välkommen {user && user.name}
      </p>
      {profile !== null ? (
        <Fragment>
          <Link to='/edit-profile' className='btn btn-light'>
            <i className='fas fa-user-circle text-primary' /> Uppdatera Profil
          </Link>
          <div className='my-2'>
            <button className='btn btn-danger' onClick={() => deleteAccount()}>
              <i className='fas fa-user-minus' /> Radera konto
            </button>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p>
            Du har ännu inte någon profil. För att kunna skapa fakturor behöver
            du uppdatera din användarinformation.
          </p>
          <Link to='/create-profile' className='btn btn-primary my-1'>
            Skapa Profil
          </Link>
        </Fragment>
      )}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
