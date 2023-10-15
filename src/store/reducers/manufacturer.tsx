import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import ApiEndPoints from 'src/Network_call/ApiEndPoints';
import ApiServices from 'src/Network_call/apiservices';
import { dispatch } from 'src/store';

const initialState = {
  count: 0,
  ManufacturerData: [],

  manufacturerDetails: [],
  getContentTypeList: [],

  isLoading: false
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
    if (response.success) {
      toast.success(response.msg);
    } else {
      toast.error(response.msg);
    }
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
      ApiEndPoints.ManufacturerList,
      payload
    );
    if (response.success) {
      return response.data;
    }
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
      .addCase(GetManufacturerList.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(GetManufacturerList.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.ManufacturerData = action.payload;
        state.count = action.payload.count;
      })
      .addCase(GetManufacturerList.rejected, (state: any, action: any) => {
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
