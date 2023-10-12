import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ApiEndPoints from 'src/Network_call/ApiEndPoints';
import ApiServices from 'src/Network_call/apiservices';
import { ChangeStatus, DeleteItem } from './commanReducer';

const initialState = {
  data: [],
  rowCount: 0,
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

export const EditContentType = createAsyncThunk(
  'edit/type',
  async (payload: any) => {
    const response = await ApiServices(
      'put',
      ApiEndPoints.EditContentType + payload.id,
      payload.data
    );
    return payload;
  }
);

export const GetContentTypeList = createAsyncThunk(
  'GetContentTypeList',
  async (payload: any) => {
    const response = await ApiServices(
      'post',
      ApiEndPoints.GetContentTypeList,
      payload
    );
    return response?.data;
  }
);
export const GetContentType = createAsyncThunk(
  'GetContentType',
  async (payload: any) => {
    const response = await ApiServices(
      'post',
      ApiEndPoints.GetContentType,
      payload
    );
    return response.data;
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
        state.data = action.payload.typeDetails;
        state.rowCount = action.payload?.count;
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
      })
      .addCase(GetContentType.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(GetContentType.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(EditContentType.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(EditContentType.fulfilled, (state: any, action: any) => {
        state.isLoading = false;

        const updateData = state.data.findIndex(
          (obj: any) => obj._id === action.payload.id
        );
        state.data[updateData].title = action.payload.data.title;
      })
      .addCase(EditContentType.rejected, (state: any) => {
        state.isLoading = false;
      });
  }
});

export default masterTypeSlice.reducer;
