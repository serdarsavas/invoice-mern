import React, { Fragment, useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const initialState = {
  phone: '',
  street: '',
  zip: '',
  city: '',
  wechatId: '',
  position: '',
  company: '',
  registrationNumber: '',
  website: '',
  vatNumber: '',
  bankgiro: '',
  invoiceTemplate: ''
};

const ProfileForm = ({
  profile: { profile, loading },
  user: { name, email },
  createProfile,
  getCurrentProfile,
  history
}) => {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }

      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    phone,
    wechatId,
    website,
    street,
    zip,
    city
    // company,
    // position,
    // registrationNumber,
    // vatNumber,
    // bankgiro,
    // invoiceTemplate
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, profile ? true : false);
  };

  return (
    <div className='form-wrapper'>
      <h1 className='title'>Din Profil</h1>
      <p className='text-dark text-xl mb-2'>
        <i className='fas fa-user' /> Gör ändringar
      </p>
      <small className='mb-4 block'>* = obligatoriskt fält</small>

      <form className='w-full max-w-lg'>
        <div className='form-innner-wrapper'>
          <div className='form-group'>
            <label className='label' htmlFor='grid-phone'>
              * Telefon
            </label>
            <input
              className='input'
              type='text'
              id='grid-phone'
              placeholder='Telefon'
              name='phone'
              value={phone}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <label className='label' htmlFor='grid-wechatId'>
              Wechat ID
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-wechatId'
              type='text'
              placeholder='Ditt Wechat ID'
              name='wechatId'
              value={wechatId}
              onChange={onChange}
            />
          </div>
          <div className='w-full px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-website'
            >
              Hemsida
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-website'
              type='text'
              placeholder='Hemsida'
              name='website'
              value={website}
              onChange={onChange}
            />
          </div>
          <div className='w-full px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-street'
            >
              Gatuadress
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-street'
              type='text'
              placeholder='Vasagatan 1'
              name='street'
              value={street}
              onChange={onChange}
              required
            />
          </div>
          <div className='w-full md:w-1/2 px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-zip'
            >
              Postkod
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-zip'
              type='text'
              placeholder='111 11'
              name='zip'
              value={zip}
              onChange={onChange}
              required
            />
          </div>
          <div className='w-full md:w-1/2 px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-city'
            >
              Ort
            </label>
            <input
              className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='grid-city'
              type='text'
              placeholder='Arvidsjaur'
              name='city'
              value={city}
              onChange={onChange}
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
};

ProfileForm.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  user: state.auth.user
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(ProfileForm)
);
