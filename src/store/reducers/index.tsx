// third-party
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// project import
import calendar from './calendar';
import snackbar from './snackbar';
import manufacturer from './manufacturer';
import auth from './auth';
import masterTypeReducer from './master';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
  calendar,
  snackbar,
  manufacturerSlice: manufacturer,
  auth: auth,
  masterType: masterTypeReducer
});

export default reducers;
