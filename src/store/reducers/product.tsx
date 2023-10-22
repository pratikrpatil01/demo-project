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

export const AddProduct = createAsyncThunk(
  'AddProduct',
  async (payload: any) => {
    const response = await ApiServices(
      'post',
      ApiEndPoints.AddProduct,
      payload
    );
    return response.data;
  }
);
export const EditProduct = createAsyncThunk(
  'EditProduct',
  async (payload: any) => {
    const response = await ApiServices(
      'put',
      ApiEndPoints.EditProduct + payload?.id,
      payload.data
    );
    return response.data;
  }
);

export const DeleteProduct = createAsyncThunk(
  'DeleteProduct',
  async (payload: any) => {
    const response = await ApiServices(
      'delete',
      ApiEndPoints.DeleteProduct + payload
    );
    if (response.success) {
      toast.success('Your item has been deleted.');
    }
    return payload;
  }
);

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
      })

      .addCase(AddProduct.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(AddProduct.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        // state.productData = action.payload.product;
      });
  }
});

export default productScile.reducer;
