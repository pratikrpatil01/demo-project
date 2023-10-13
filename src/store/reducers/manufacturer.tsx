import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ApiEndPoints from 'src/Network_call/ApiEndPoints';
import ApiServices from 'src/Network_call/apiservices';
import { dispatch } from 'src/store';

const initialState = {
  count: 0,
  ManufacturerData: [],
  manufacturerDetails: [],
  getContentTypeList: [],

  isLoading: true
};

export const addManufactur = createAsyncThunk(
  'addManufactur',
  async (payload: any) => {
    console.log('respont', payload);
    const response = await ApiServices(
      'post',
      ApiEndPoints.ManufacturerAdd,
      payload
    );
    return response;
  }
);
export const editManufactur = createAsyncThunk(
  'editManufactur',
  async (payload: any) => {
    const response = await ApiServices(
      'post',
      ApiEndPoints.ManufacturerAdd,
      payload
    );
    return response;
  }
);
export const GetManufacturerList = createAsyncThunk(
  'GetManufacturerList',
  async (payload: any) => {
    const response = await ApiServices(
      'post',
      ApiEndPoints.ManufacturerAdd,
      payload
    );
    return response;
  }
);

export const getContentTypeList = createAsyncThunk(
  'getContentTypeList',
  async (payload: any) => {
    const response = await ApiServices(
      'post',
      ApiEndPoints.GetContentType,
      payload
    );
    return response.data;
  }
);

const manufacturerSlice = createSlice({
  name: 'manufacturerSlice',
  initialState,

  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(addManufactur.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(addManufactur.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
      })
      .addCase(editManufactur.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(editManufactur.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
      })

      .addCase(getContentTypeList.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(getContentTypeList.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.data = action.payload;
      });
  }
});

export default manufacturerSlice.reducer;

// const GetManufacturerList = async (payload: any) => {
//   const response = await ApiServices('post', payload, ApiEndPoints.DataList);
//   dispatch(manufacturerSlice.actions.manufacturerList(response));
// };
// const getManufacturerDetails = async (payload) => {
//   const response = await ApiServices('get', payload, ApiEndPoints);
//   dispatch(manufacturerSlice.actions.addManufacturer(response));
// };
// // const addManufactur = async (payload: any) => {
// //   const response = await ApiServices('get', payload, ApiEndPoints);
// //   dispatch(manufacturerSlice.actions.addManufacturer(response));
// // };
// const decreseCount = async () => {
//   dispatch(manufacturerSlice.actions.decrese());
// };

// const increseCount = async () => {
//   dispatch(manufacturerSlice.actions.increse());
// };

// const GetContentTypeList = async (payload: any) => {
//   const response = await ApiServices('get', ApiEndPoints.GetContentTypeList);
//   dispatch(manufacturerSlice.actions.GetContentTypeList(response));
// };

// export {
//   GetManufacturerList,
//   getManufacturerDetails,
//   addManufactur,
//   increseCount,
//   decreseCount,
//   GetContentTypeList
// };
