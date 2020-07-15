import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const InvoiceForm = () => {
  const [formData, setFormData] = useState({
    phone: '',
    wechatId: '',
    website: '',
    street: '',
    zip: '',
    city: '',
    company: '',
    position: '',
    registrationNumber: '',
    bankgiro: '',
    vatNumber: ''
  });

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
    bankgiro,
    vatNumber
  } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    //TODO: send Invoice data
  };

  return (
    <div className='form-wrapper'>
      <h1 className='title'>Ny faktura</h1>
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
              name='bankgiro'
              value={bankgiro}
              onChange={onChange}
            />
          </div>
          <div className='form-group'>
            <Link className='btn btn-dark' to='/dashboard'>
              Gå tillbaka
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

InvoiceForm.propTypes = {
  prop: PropTypes
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {})(InvoiceForm);
