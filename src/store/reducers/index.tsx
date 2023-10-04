// third-party
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// project import
import calendar from './calendar';
import snackbar from './snackbar';
import manufacturer from './manufacturer';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
  calendar,
  snackbar,
  manufacturerSlice: manufacturer
});

export default reducers;
