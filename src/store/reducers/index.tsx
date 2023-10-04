// third-party
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// project import
import calendar from './calendar';
import menu from './menu';
import snackbar from './snackbar';
import productReducer from './product';
import invoice from './invoice';
import manufacturer from './manufacturer';

// ==============================|| COMBINE REDUCERS ||============================== //

const reducers = combineReducers({
  calendar,
  menu,
  snackbar,
  product: productReducer,
  invoice,
  manufacturerSlice: manufacturer
});

export default reducers;
