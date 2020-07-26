import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import invoice from './invoice';

export default combineReducers({
  alert,
  auth,
  profile,
  invoice
});
