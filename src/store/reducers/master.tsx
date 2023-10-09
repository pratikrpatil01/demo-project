import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ApiEndPoints from 'src/Network_call/ApiEndPoints';
import ApiServices from 'src/Network_call/apiservices';
import { ChangeStatus, DeleteItem } from './commanReducer';

const initialState = {
  data: [],
  isLoading: false,
  error: null
};

export const AddContentType = createAsyncThunk(
  'add/type',
  async (payload: any) => {
    const response = await ApiServices(
      'post',
      ApiEndPoints.AddContentType,
      payload
    );
    return response;
  }
);

export const GetContentTypeList = createAsyncThunk(
  'GetContentTypeList',
  async () => {
    const response = await ApiServices('get', ApiEndPoints.GetContentTypeList);
    return response?.data;
  }
);

const masterTypeSlice = createSlice({
  name: 'manufacturerSlice',
  initialState,

  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(AddContentType.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(AddContentType.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
      })
      .addCase(GetContentTypeList.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(GetContentTypeList.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(ChangeStatus.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(ChangeStatus.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        const updateData = state.data.findIndex(
          (obj: any) => obj._id === action.payload.id
        );
        state.data[updateData].status = action.payload.data.status;
      })
      .addCase(DeleteItem.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(DeleteItem.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.data = state.data.filter(
          (item: any) => item._id !== action.payload
        );
      });
  }
});

export default masterTypeSlice.reducer;
