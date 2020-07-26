import axios from 'axios';
import { setAlert } from './alert';

import { CREATE_INVOICE, EDIT_INVOICE } from './types';

export const createInvoice = formData => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios.post('/api/invoice', formData, config);

    dispatch({
      type: CREATE_INVOICE,
      payload: res.data
    });
  } catch (err) {
    console.error(err);
  }
};
