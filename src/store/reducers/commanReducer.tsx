import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import ApiEndPoints from 'src/Network_call/ApiEndPoints';
import ApiServices from 'src/Network_call/apiservices';

import Swal from 'sweetalert2';

export const ChangeStatus = createAsyncThunk(
  'ChangeStatus',
  async (payload: any) => {
    const response = await ApiServices(
      'put',
      ApiEndPoints.StatusActiveInactive + payload?.id,
      payload.data
    );
    if (response.success) {
      toast.success('Your status has been changed.');
    }
    return payload;
  }
);

export const DeleteItem = createAsyncThunk('Delete', async (payload: any) => {
  const response = await ApiServices(
    'delete',
    ApiEndPoints.Delete + payload?.id,
    payload.data
  );
  if (response.success) {
    toast.success('Your item has been deleted.');
  }
  return response.success ? payload?.id : null;
});

export const getType = createAsyncThunk('getType', async (payload: any) => {
  const response = await ApiServices(
    'post',
    ApiEndPoints.GetContentType,
    payload
  );

  return response.data;
});

export const UploadFile = createAsyncThunk('getType', async (payload: any) => {
  const response = await ApiServices(
    'post',
    ApiEndPoints.UploadFile,
    payload,
    true
  );

  return response.url;
});
