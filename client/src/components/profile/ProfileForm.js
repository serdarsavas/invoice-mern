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
    city,
    company,
    position,
    registrationNumber,
    vatNumber,
    bankgiro,
    invoiceTemplate
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, profile ? true : false);
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className='form-wrapper'>
      <h1 className='title'>Din Profil</h1>
      <p className='text-dark text-xl mb-2'>
        <i className='fas fa-user' /> Gör ändringar
      </p>
      <small className='mb-4 block'>* = obligatoriskt fält</small>

      <form onSubmit={onSubmit} className='w-full max-w-lg'>
        <div className='form-inner-wrapper'>
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
              className='input'
              id='grid-wechatId'
              type='text'
              placeholder='Ditt Wechat ID'
              name='wechatId'
              value={wechatId}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <label className='label' htmlFor='grid-website'>
              Hemsida
            </label>
            <input
              className='input'
              id='grid-website'
              type='text'
              placeholder='Hemsida'
              name='website'
              value={website}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <label className='label' htmlFor='grid-street'>
              * Gatuadress
            </label>
            <input
              className='input'
              id='grid-street'
              type='text'
              placeholder='Vasagatan 1'
              name='street'
              value={street}
              onChange={onChange}
              required
            />
          </div>
          <div className='flex flex-wrap'>
            <div className='form-group md:w-1/2'>
              <label className='label' htmlFor='grid-zip'>
                * Postkod
              </label>
              <input
                className='input'
                id='grid-zip'
                type='text'
                placeholder='111 11'
                name='zip'
                value={zip}
                onChange={onChange}
                required
              />
            </div>
            <div className='form-group md:w-1/2'>
              <label className='label' htmlFor='grid-city'>
                * Ort
              </label>
              <input
                className='input'
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
          <div className='form-group'>
            <label htmlFor='company' className='label'>
              * Företag
            </label>
            <input
              type='text'
              className='input'
              id='company'
              placeholder='SpaceX Inc.'
              name='company'
              value={company}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='position' className='label'>
              Yrkesroll
            </label>
            <input
              type='text'
              className='input'
              id='position'
              placeholder='Författare'
              name='position'
              value={position}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='registration-number' className='label'>
              * Organisationsnummer
            </label>
            <input
              type='text'
              className='input'
              id='registration-number'
              placeholder='650323-2345.'
              name='registrationNumber'
              value={registrationNumber}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='vat-number' className='label'>
              * Momsreg.
            </label>
            <input
              type='text'
              className='input'
              id='vat-number'
              placeholder='SE6503232345.'
              name='vatNumber'
              value={vatNumber}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='bankgiro' className='label'>
              Bankgiro / Kontonummer
            </label>
            <input
              type='text'
              className='input'
              id='bankgiro'
              placeholder='SE6503232345.'
              name='vatNumber'
              value={vatNumber}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-primary'>
              {profile ? 'Uppdatera' : 'Skapa profil'}
            </button>
            <Link className='btn btn-dark' to='/dashboard'>
              Gå tillbaka
            </Link>
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
