import { AnyAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ApiEndPoints from 'src/Network_call/ApiEndPoints';
import ApiServices from 'src/Network_call/apiservices';
import { dispatch } from 'src/store';

const initialState = {
  data: null,
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

export const ChangeContentTypeStatus = createAsyncThunk(
  'ChangeStatus',
  async (payload: any) => {
    const response = await ApiServices(
      'put',
      ApiEndPoints.StatusActiveInactive + payload?.id,
      payload.data
    );
    return response?.data;
  }
);

export const DeleteContentType = createAsyncThunk(
  'DeleteContentType',
  async (payload: any) => {
    const response = await ApiServices(
      'delete',
      ApiEndPoints.Delete + payload?.id,
      payload.data
    );
    return response;
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
        // state.dat.unshift(action.payload);
      })
      .addCase(GetContentTypeList.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(GetContentTypeList.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(ChangeContentTypeStatus.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(ChangeContentTypeStatus.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        // state.data = action.payload;
      })
      .addCase(DeleteContentType.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(DeleteContentType.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
      });
  }
});

export default masterTypeSlice.reducer;
