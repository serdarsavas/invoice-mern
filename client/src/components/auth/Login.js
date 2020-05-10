import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='w-full max-w-xl m-auto'>
      <h1 className='text-primary text-3xl'>Logga in</h1>
      <p className='text-lg my-4'>
        <i className='fas fa-user' /> Logga in på ditt konto
      </p>
      <form
        className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
        onSubmit={e => onSubmit(e)}
      >
        <label class='block text-gray-700 text-sm font-bold mb-2' for='email'>
          Email
        </label>
        <div className='mb-4'>
          <input
            className='input'
            type='email'
            placeholder='janedoe@gmail.com'
            name='email'
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='mb-6'>
          <label
            class='block text-gray-700 text-sm font-bold mb-2'
            for='password'
          >
            Lösenord
          </label>
          <input
            className='input'
            type='password'
            placeholder='Minst sex tecken'
            name='password'
            value={password}
            onChange={e => onChange(e)}
            minLength='6'
          />
        </div>
        <div className='flex items-center justify-between'>
          <button className='btn btn-primary'>Logga In</button>
          <Link
            to='/register'
            className='text-primary inline-block align-baseline font-bold text-sm hover:underline'
          >
            Inget konto? Registrera dig här
          </Link>
        </div>
      </form>
    </section>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
