import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import ApiEndPoints from 'src/Network_call/ApiEndPoints';
import ApiServices from 'src/Network_call/apiservices';

const initialState = {
  count: 0,
  ManufacturerData: [],

  ManufacturerDetails: [],
  getContentTypeList: [],

  isLoading: false
};

export const addManufactur = createAsyncThunk(
  'addManufactur',
  async (payload: any) => {
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

export const GetManufacturerDetails = createAsyncThunk(
  'GetManufacturerDetails',
  async (payload: any) => {
    const response = await ApiServices(
      'post',
      ApiEndPoints.ManufacturerDetail,
      payload
    );
    if (response.success) {
      return response.data;
    } else {
      return [
        {
          _id: '652f84839812e2c69d6ab368',
          manufacturerName: 'cipla',
          address: 'indore',
          gstNumber: '42498a6546',
          numOfPlants: 1,
          city: 'indore',
          country: 'india',
          status: 1,
          availabilityOfManufacturingLicenseId: '652f80ee9812e2c69d6ab2cd',
          activitiesId: '652f809f9812e2c69d6ab2c1',
          personelId: '652f81339812e2c69d6ab2dc',
          equipmentsId: '652f815a9812e2c69d6ab2e2',
          typeOfProductsId: '652f81e19812e2c69d6ab2eb',
          sectionsDosageFromsApprovedId: '652f82229812e2c69d6ab2f4',
          indianGmpStatusId: '652f82699812e2c69d6ab303',
          internationalGmpStatusId: '652f82b49812e2c69d6ab312',
          nonPharmaActivitiesId: '123654',
          plantName: 'pharm cipla',
          plantAddress: 'pithampur',
          dosageFormsId: '652f83df9812e2c69d6ab340',
          createdAt: '2023-10-18T06:43:32.892Z',
          plantDocument: [],
          __v: 0,
          products: [
            {
              _id: '6533e4e69663f30928accef0',
              manufacturer_id: '652f84839812e2c69d6ab368',
              products_name: 'test',
              strength: '500mg',
              dosage_forms: 'Tablet',
              packing: 'dd',
              dossier:
                'https://dev-drivecure.s3.amazonaws.com/1697899672206.jfif',
              list_of_countries: 'Japan',
              api_dmf: 'wer',
              pack_size: '200',
              ba_be_studies: '4ll',
              category: 'test',
              batches_frequently: 'Monthly',
              moq: 'ss',
              shipper_pack_size: '100',
              tentative_rates: '10',
              lead_time: '100day',
              brand_name: 'cipla',
              status: 1,
              createdAt: '2023-10-18T07:31:39.997Z',
              __v: 0
            },
            {
              _id: '653567469663f30928accf02',
              manufacturer_id: '652f84839812e2c69d6ab368',
              products_name: 'demo',
              strength: 'ddd',
              dosage_forms: 'Tablet',
              packing: 'ddd',
              dossier:
                'https://dev-drivecure.s3.amazonaws.com/1697998628423.png',
              list_of_countries: 'UK',
              api_dmf: 'dff',
              pack_size: 'dfdfdfdf',
              ba_be_studies: 'fdf',
              category: 'ttt',
              batches_frequently: 'Weekly',
              moq: 'fdf',
              shipper_pack_size: 'dff',
              tentative_rates: 'dfd',
              lead_time: 'dfdf',
              brand_name: 'ddfdf',
              status: 1,
              createdAt: '2023-10-18T07:31:39.997Z',
              __v: 0
            },
            {
              _id: '653567469663f30928accf02',
              manufacturer_id: '652f84839812e2c69d6ab368',
              products_name: 'demo123',
              strength: 'ddd',
              dosage_forms: 'Tablet',
              packing: 'ddd',
              dossier:
                'https://dev-drivecure.s3.amazonaws.com/1697998628423.png',
              list_of_countries: 'UK',
              api_dmf: 'dff',
              pack_size: 'dfdfdfdf',
              ba_be_studies: 'fdf',
              category: 'ttt',
              batches_frequently: 'Weekly',
              moq: 'fdf',
              shipper_pack_size: 'dff',
              tentative_rates: 'dfd',
              lead_time: 'dfdf',
              brand_name: 'ddfdf',
              status: 1,
              createdAt: '2023-10-18T07:31:39.997Z',
              __v: 0
            }
          ]
        }
      ];
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
        state.ManufacturerData = action.payload.manufacturerList;
        state.count = action.payload.count;
      })
      .addCase(GetManufacturerDetails.pending, (state: any) => {
        state.isLoading = true;
      })
      .addCase(GetManufacturerDetails.fulfilled, (state: any, action: any) => {
        state.isLoading = false;
        state.ManufacturerDetails = action.payload
          ? action.payload
          : state.ManufacturerDetails;
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
