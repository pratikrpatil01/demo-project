import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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
    Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
  }
  return response.success ? payload?.id : null;
});
