import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import ApiEndPoints from 'src/Network_call/ApiEndPoints';
import ApiServices from 'src/Network_call/apiservices';
import { dispatch } from 'src/store';

const initialState = {
  count: 0,
  productData: [],
  isLoading: false
};

export const GetProductList = createAsyncThunk('GetProductList', async () => {
  const response = await ApiServices('get', ApiEndPoints.GetProductList);
  return response.data;
});

const productScile = createSlice({
  name: 'productScile',
  initialState,

  reducers: {},
  extraReducers: (builder: any) => {
    builder

      .addCase(GetProductList.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(GetProductList.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.productData = action.payload.product;
      });
  }
});

export default productScile.reducer;
