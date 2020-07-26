import { CREATE_INVOICE, EDIT_INVOICE } from '../actions/types';

const intitialState = {
  invoice: null,
  loading: true,
  error: {}
};

export default function (state = intitialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_INVOICE:
      return {
        ...state,
        invoice: payload,
        loading: false
      };
    default:
      return state;
  }
}
