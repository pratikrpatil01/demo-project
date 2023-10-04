import { createSlice } from '@reduxjs/toolkit';
import ApiEndPoints from 'src/Network_call/ApiEndPoints';
import ApiServices from 'src/Network_call/apiservices';
import { dispatch } from 'src/store';

const initialState = {
  count: 0,
  ManufacturerData: [],
  manufacturerDetails: [],
  isLoading: true
};
const manufacturerSlice = createSlice({
  name: 'manufacturerSlice',
  initialState,

  reducers: {
    increse: (state) => {
      state.count = state.count + 1;
    },
    decrese: (state) => {
      state.count = state.count - 1;
    },

    addManufacturer: (state, action) => {
      console.log('add', action.payload, 'state', state);
    },
    manufacturerList: (state, action) => {
      state.ManufacturerData = action.payload;
      console.log('action.payload', action.payload);
    },
    manufacturerDetails: (state, action) => {
      state.manufacturerDetails = action.payload;
      console.log('action.payload', action.payload);
    }
  }
});

export const {
  addManufacturer,
  manufacturerList,
  manufacturerDetails,
  increse,
  decrese
} = manufacturerSlice.actions;

export default manufacturerSlice.reducer;

const GetManufacturerList = async (payload) => {
  const response = await ApiServices('post', payload, ApiEndPoints.DataList);
  dispatch(manufacturerSlice.actions.manufacturerList(response));
};
const getManufacturerDetails = async (payload) => {
  const response = await ApiServices('get', payload, ApiEndPoints);
  dispatch(manufacturerSlice.actions.addManufacturer(response));
};
const addManufactur = async (payload) => {
  const response = await ApiServices('get', payload, ApiEndPoints);
  dispatch(manufacturerSlice.actions.addManufacturer(response));
};
const decreseCount = async () => {
  dispatch(manufacturerSlice.actions.decrese());
};

const increseCount = async () => {
  dispatch(manufacturerSlice.actions.increse());
};

export {
  GetManufacturerList,
  getManufacturerDetails,
  addManufactur,
  increseCount,
  decreseCount
};
