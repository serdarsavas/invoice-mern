import React, { Fragment } from 'react';

const NotFound = () => {
  return (
    <Fragment>
      <h1 className='x-large text-primary'>
        <i className='fas fa-exclamation-triangle' /> 404 Not Found
      </h1>
      <p className='large'>Denna sida existerar tyvärr inte</p>
    </Fragment>
  );
};

export default NotFound;
