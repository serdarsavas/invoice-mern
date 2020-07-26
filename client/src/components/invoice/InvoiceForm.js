import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createInvoice } from '../../actions/invoice';

export const InvoiceForm = ({
  // user: { name, email },
  profile: { profile, loading },
  createInvoice
}) => {
  const [formData, setFormData] = useState({
    street: '',
    city: '',
    description: '',
    quantity: '',
    price: ''
  });

  const { street, city, description, quantity, price } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    //TODO: send Invoice data
    createInvoice(formData);
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
            <label className='label' htmlFor='street'>
              * Gatuadress
            </label>
            <input
              className='input'
              type='text'
              id='street'
              placeholder='Bokstigen 1'
              name='street'
              value={street}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <label className='label' htmlFor='city'>
              * Stad
            </label>
            <input
              className='input'
              type='text'
              id='city'
              placeholder='Stockholm'
              name='city'
              value={city}
              onChange={onChange}
              required
            />
          </div>

          <div className='form-group'>
            <label className='label' htmlFor='description'>
              * Beskrivning
            </label>
            <input
              className='input'
              type='text'
              id='description'
              placeholder='Tolkning'
              name='description'
              value={description}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <label className='label' htmlFor='quantity'>
              * Telefon
            </label>
            <input
              className='input'
              type='text'
              id='quantity'
              placeholder='Antal'
              name='quantity'
              value={quantity}
              onChange={onChange}
              required
            />
          </div>
          <div className='form-group'>
            <label className='label' htmlFor='price'>
              * Á-pris
            </label>
            <input
              className='input'
              type='Number'
              id='price'
              placeholder='10'
              name='price'
              value={price}
              onChange={onChange}
              required
            />
          </div>

          <button>Skapa faktura</button>
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
  createInvoice: PropTypes.func.isRequired,
  invoice: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  invoice: state.invoice
});

export default connect(mapStateToProps, { createInvoice })(InvoiceForm);
