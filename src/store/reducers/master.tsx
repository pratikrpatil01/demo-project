import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ApiEndPoints from 'src/Network_call/ApiEndPoints';
import ApiServices from 'src/Network_call/apiservices';
import { ChangeStatus, DeleteItem } from './commanReducer';
import Swal from 'sweetalert2';

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
    if (response.success) {
      Swal.fire('Add', 'Your data has been add.', 'success');
    }
    if (response.success) {
      return response.data;
    }
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

    if (response.success) {
      Swal.fire('Edit', 'Your data has been edit.', 'success');
    }
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
        console.log(action.payload);
        state.data = [...state.data, action.payload];
        state.rowCount = state.rowCount + 1;
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
        state.rowCount = state.rowCount - 1;
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
