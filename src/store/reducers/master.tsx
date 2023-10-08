import { AnyAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ApiEndPoints from 'src/Network_call/ApiEndPoints';
import ApiServices from 'src/Network_call/apiservices';
import { dispatch } from 'src/store';

const initialState = {
  data: null,
  isLoading: false,
  error: null
};

export const AddType = createAsyncThunk('add/type', async (payload: any) => {
  const response = await ApiServices('post', ApiEndPoints.AddType, payload);
  return response;
});
export const GetTypeList = createAsyncThunk('GetTypeList', async () => {
  const response = await ApiServices(
    'get',
    ApiEndPoints.GetTypeList
    //   payload
  );
  return response?.data;
});

const masterTypeSlice = createSlice({
  name: 'manufacturerSlice',
  initialState,

  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(AddType.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(AddType.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        // state.dat.unshift(action.payload);
      })
      .addCase(GetTypeList.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(GetTypeList.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.data = action.payload;
      });
  }
});

export default masterTypeSlice.reducer;
