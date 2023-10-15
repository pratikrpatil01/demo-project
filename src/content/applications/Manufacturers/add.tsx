import React, { useEffect, useReducer, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import AddPageHeader from './AddPageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';

import Footer from 'src/components/Footer';
import {
  Grid,
  Box,
  Card,
  Typography,
  Container,
  Divider,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  NativeSelect,
  FormControl,
  SelectChangeEvent,
  FormHelperText
} from '@mui/material';

import RecentOrders from './RecentOrders';
import List from './List';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import ApiServices from 'src/Network_call/apiservices';
import ApiEndPoints from 'src/Network_call/ApiEndPoints';
import { AnyAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addManufactur,getContentTypeList } from 'src/store/reducers/manufacturer';
import { any } from 'prop-types';
import { dispatch } from 'src/store';

function ApplicationsAddManufacturers() {
  //const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  

  const [dropdownValue ,setDropdownvalue] = useState({Personel:[],Activity:[],InternationalGmpStatus:[],ManufacturerLicense:[],Equipment:[],TypesofProduct:[],Section:[],IndianGmpStatus:[],NonPharmaactivities:[],DosageForm:[],BatchesFrequently:[]});
  const validateSchema = yup.object().shape({
    manufacturerName: yup.string().required('The name field is required'),
    city: yup.string().required('The city field is required'),
    country: yup.string().required('The country field is required'),
    dosageFormsId: yup.string().required('The dosage forms field is required'),
    gstNumber: yup.string().required('The gst number field is required'),
    activitiesId: yup.string().required('The activitiesId field is required'),
    typeOfProductsId: yup
      .string()
      .required('The types of products field is required'),
      batchesFrequently: yup
      .string()
      .required('The types of products field is required'),
    internationalGmpStatusId: yup
      .string()
      .required('The international GMP status field is required'),
    numOfPlants: yup.string().required('The no of plants field is required'),
    personelId: yup.string().required('The personelId field is required'),
    sectionsDosageFromsApprovedId: yup
      .string()
      .required('The sections dosage forms approved field is required'),
    nonPharmaActivitiesId: yup
      .string()
      .required('The non pharma activitiesId field is required'),
    availabilityOfManufacturingLicenseId: yup
      .string()
      .required('The availability of manufacturing license field is required'),
    address: yup.string().required('The address field is required'),
    equipmentsId: yup.string().required('The equipmentsId field is required'),
    indianGmpStatusId: yup
      .string()
      .required('The indian GMP status state GMP field is required'),
    plantName: yup.string().required('The plant name field is required'),
    plantAddress: yup.string().required('The plant address field is required')
  });


  const formik = useFormik({
    
    initialValues: {
      manufacturerName: '',
      gstNumber: '',
      activitiesId: '',
      typeOfProductsId: '',
      internationalGmpStatusId: '',
      numOfPlants: '',
      plantsDocument: '',
      personelId: '',
      sectionsDosageFromsApprovedId: '',
      nonPharmaActivitiesId: '',
      availabilityOfManufacturingLicenseId: '',
      address: '',
      equipmentsId: '',
      indianGmpStatusId: '',
      plantName: '',
      plantAddress: '',
      city: '',
      country: '',
      personel: '',
      dosageFormsId: '',
      batchesFrequently:'',
    },
    validationSchema: validateSchema,
    onSubmit: async (values, { resetForm }) => {
      dispatch(addManufactur(values));
      resetForm();
      console.log(values);
    }
  });

  console.log(formik.errors, 'error form');
  const [
    availabilityOfManufacturingLicenseId,
    setAvailabilityOfManufacturingLicense
  ] = useState('');

  const [activitiesId, setactivitiesId] = useState('');
  const [personelId, setpersonelId] = useState('');
  const [equipmentsId, setequipmentsId] = useState('');
  const [typeOfProductsId, setTypesOfProducts] = useState('');
  const [sectionsDosageFromsApprovedId, setSectionsDosageFormsApproved] =
    useState('');
  const [indianGmpStatusId, setIndianGMPStatusStateGMP] = useState('');
  const [internationalGmpStatusId, setInternationalGMPStatus] = useState('');
  const [nonPharmaActivitiesId, setNonPharmaactivitiesId] = useState('');
  const [batchesFrequently, setbatchesFrequently] = useState('');
  

  const handleChangeAvailabilityOfManufacturingLicense = (
    event: SelectChangeEvent
  ) => {
    setAvailabilityOfManufacturingLicense(event.target.value);
  };

  const handleChangeactivitiesId = (event: SelectChangeEvent) => {
    setactivitiesId(event.target.value);
  };

  const handleChangepersonelId = (event: SelectChangeEvent) => {
    setpersonelId(event.target.value);
  };

  const handleChangeequipmentsId = (event: SelectChangeEvent) => {
    setequipmentsId(event.target.value);
  };
  const handleChangeTypesOfProducts = (event: SelectChangeEvent) => {
    setTypesOfProducts(event.target.value);
  };
  const handleChangeSectionsDosageFormsApproved = (
    event: SelectChangeEvent
  ) => {
    setSectionsDosageFormsApproved(event.target.value);
  };
  const handleChangeIndianGMPStatusStateGMP = (event: SelectChangeEvent) => {
    setIndianGMPStatusStateGMP(event.target.value);
  };
  const handleChangeInternationalGMPStatus = (event: SelectChangeEvent) => {
    setInternationalGMPStatus(event.target.value);
  };
  const handleChangeNonPharmaactivitiesId = (event: SelectChangeEvent) => {
    setNonPharmaactivitiesId(event.target.value);
  };

  
  const { data, isLoading } = useSelector((store: any) => store.manufacturerSlice);
 
  const getContentTypeData = async (event) => {
    const response = await dispatch(getContentTypeList(event));
    setDropdownvalue((preview:any) => ({
      ...preview,[event.type] : response.payload
    })) 
    console.log("response")
    console.log(response)
    
    // Your function to be called when the TextField receives focus
    console.log('TextField has received focus');
  };

 console.log(dropdownValue,'checkData')



  

  
  return (
    <>
      <Helmet>
        <title>Add Manufacturers</title>
      </Helmet>
      <PageTitleWrapper>
        <AddPageHeader />
      </PageTitleWrapper>

      <Container style={{ height: '100%' }} maxWidth={false}>
        <Card style={{ padding: '25px' }}>
          <Typography variant="h3" component="h3" gutterBottom>
            Add Manufacturers
          </Typography>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="stretch"
              spacing={6}
            >
              <Grid item xs={4}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="manufacturerName"
                  label="Enter Full Name"
                  name="manufacturerName"
                  autoComplete="manufacturerName"
                  onChange={formik.handleChange}
                  value={formik.values.manufacturerName}
                  helperText={
                    formik.errors.manufacturerName
                      ? formik.errors.manufacturerName
                      : ''
                  }
                  error={formik.errors.manufacturerName ? true : false}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="city"
                  label="Enter City"
                  id="city"
                  autoComplete="Enter City"
                  onChange={formik.handleChange}
                  value={formik.values.city}
                  helperText={formik.errors.city ? formik.errors.city : ''}
                  error={formik.errors.city ? true : false}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="country"
                  label="Enter Country"
                  id="country"
                  autoComplete="Enter Country"
                  onChange={formik.handleChange}
                  value={formik.values.country}
                  helperText={
                    formik.errors.country ? formik.errors.country : ''
                  }
                  error={formik.errors.country ? true : false}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  select
                  name="batchesFrequently"
                  label="Enter Batches Frequently"
                  id="batchesFrequently"
                  defaultValue="Select Batches Frequently"
                  autoComplete="Enter Batches Frequently"
                  onChange={formik.handleChange}
                  value={formik.values.batchesFrequently}
                  onFocus={() => getContentTypeData({ 'type': 'BatchesFrequently' })}
                  helperText={
                    formik.errors.batchesFrequently ? formik.errors.batchesFrequently : ''
                  }
                  error={formik.errors.batchesFrequently ? true : false}
                >
                {dropdownValue?.BatchesFrequently && dropdownValue?.BatchesFrequently?.map((value, index) => (
                    <MenuItem key={index} value={value._id}>
                      {value.title}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  select
                  name="dosageFormsId"
                  label="Enter Dosage Form"
                  id="dosageFormsId"
                  defaultValue="Select Dosage Form"
                  autoComplete="Enter Dosage Form"
                  onChange={formik.handleChange}
                  value={formik.values.dosageFormsId}
                  onFocus={() => getContentTypeData({ 'type': 'DosageForm' })}
                  helperText={
                    formik.errors.dosageFormsId ? formik.errors.dosageFormsId : ''
                  }
                  error={formik.errors.dosageFormsId ? true : false}
                >
                {dropdownValue?.DosageForm && dropdownValue?.DosageForm?.map((value, index) => (
                    <MenuItem key={index} value={value._id}>
                      {value.title}
                    </MenuItem>
                  ))}
                </TextField>

                
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="gstNumber"
                  label="Enter GST Number"
                  id="gstNumber"
                  autoComplete="Enter GST Number"
                  onChange={formik.handleChange}
                  value={formik.values.gstNumber}
                  helperText={formik.errors.gstNumber ? formik.errors.gstNumber : ''}
                  error={formik.errors.gstNumber ? true : false}
                />
                


                <TextField
                  margin="normal"
                  id="internationalGmpStatusId"
                  required
                  fullWidth
                  select
                  label="Select International GMP Status"
                  name="internationalGmpStatusId"
                  defaultValue="Select"
                  onChange={formik.handleChange}
                  value={formik.values.internationalGmpStatusId}
                  helperText={
                    formik.errors.internationalGmpStatusId
                      ? formik.errors.internationalGmpStatusId
                      : ''
                  }
                  error={formik.errors.internationalGmpStatusId ? true : false}
                  onFocus={() => getContentTypeData({ 'type': 'InternationalGmpStatus' })}
                >
                {dropdownValue?.InternationalGmpStatus && dropdownValue?.InternationalGmpStatus?.map((value, index) => (
                    <MenuItem key={index} value={value._id}>
                      {value.title}
                    </MenuItem>
                  ))}
                </TextField>

                
              </Grid>
              <Grid item xs={4}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="numOfPlants"
                  label="No.of Plants"
                  id="numOfPlants"
                  autoComplete="No.of Plants"
                  onChange={formik.handleChange}
                  value={formik.values.numOfPlants}
                  helperText={
                    formik.errors.numOfPlants ? formik.errors.numOfPlants : ''
                  }
                  error={formik.errors.numOfPlants ? true : false}
                />
                <TextField
                  style={{ borderColor: 'gray' }}
                  margin="normal"
                  required
                  fullWidth
                  name="plantsDocument"
                  label="Plants Document"
                  type="file"
                  id="plants_document"
                  autoComplete="Plants Document"
                  focused
                  
                  value={formik.values.plantsDocument}
                  helperText={
                    formik.errors.plantsDocument
                      ? formik.errors.plantsDocument
                      : ''
                  }
                  error={formik.errors.plantsDocument ? true : false}
                />

                <TextField
                  margin="normal"
                  id="personelId"
                  required
                  fullWidth
                  select
                  label="Select Personel"
                  name="personelId"
                  defaultValue="Select personelId"
                  onChange={formik.handleChange}
                  value={formik.values.personelId}
                  helperText={
                    formik.errors.personelId ? formik.errors.personelId : ''
                  }
                  error={formik.errors.personelId ? true : false}
                  onFocus={() => getContentTypeData({ 'type': 'Personel' })}
                  >
                  {dropdownValue?.Personel && dropdownValue?.Personel?.map((value, index) => (
                      <MenuItem key={index} value={value._id}>
                        {value.title}
                      </MenuItem>
                    ))}
                </TextField>

                <TextField
                  margin="normal"
                  id="sectionsDosageFromsApprovedId"
                  required
                  fullWidth
                  select
                  label="Select Sons Dosage Froms Approved"
                  name="sectionsDosageFromsApprovedId"
                  defaultValue="Select"
                  onChange={formik.handleChange}
                  value={formik.values.sectionsDosageFromsApprovedId}
                  helperText={
                    formik.errors.sectionsDosageFromsApprovedId
                      ? formik.errors.sectionsDosageFromsApprovedId
                      : ''
                  }
                  error={
                    formik.errors.sectionsDosageFromsApprovedId ? true : false
                  }
                  onFocus={() => getContentTypeData({ 'type': 'Section' })}
                  >
                   {dropdownValue?.Section && dropdownValue?.Section?.map((value, index) => (
                      <MenuItem key={index} value={value._id}>
                        {value.title}
                      </MenuItem>
                    ))}
                </TextField>

                <TextField
                  margin="normal"
                  id="nonPharmaActivitiesId"
                  required
                  fullWidth
                  select
                  label="Select Non Pharma activitiesId"
                  name="nonPharmaActivitiesId"
                  defaultValue="Select"
                  onChange={formik.handleChange}
                  value={formik.values.nonPharmaActivitiesId}
                  helperText={
                    formik.errors.nonPharmaActivitiesId
                      ? formik.errors.nonPharmaActivitiesId
                      : ''
                  }
                  error={formik.errors.nonPharmaActivitiesId ? true : false}
                  onFocus={() => getContentTypeData({ 'type': 'NonPharmaactivities' })}
                  >
                     <MenuItem key='s' value="123654">sfsfsdf</MenuItem>
                  {dropdownValue?.NonPharmaactivities && dropdownValue?.NonPharmaactivities?.map((value, index) => (
                      <MenuItem key={index} value={value._id}>
                        {value.title}
                      </MenuItem>
                    ))}
                </TextField>

                <TextField
                  margin="normal"
                  id="activitiesId"
                  required
                  fullWidth
                  select
                  label="Select activitiesId"
                  name="activitiesId"
                  defaultValue="Select"
                  onChange={formik.handleChange}
                  value={formik.values.activitiesId}
                  helperText={
                    formik.errors.activitiesId ? formik.errors.activitiesId : ''
                  }
                  error={formik.errors.activitiesId ? true : false}
                  onFocus={() => getContentTypeData({ 'type': 'Activity' })}
                  >
                  {dropdownValue?.Activity && dropdownValue?.Activity?.map((value, index) => (
                      <MenuItem key={index} value={value._id}>
                        {value.title}
                      </MenuItem>
                    ))}
                </TextField>

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="plantAddress"
                  label="Enter Plant Address"
                  id="plantAddress"
                  autoComplete="Enter GST Number"
                  onChange={formik.handleChange}
                  value={formik.values.plantAddress}
                  helperText={
                    formik.errors.plantAddress
                      ? formik.errors.plantAddress
                      : ''
                  }
                  error={formik.errors.plantAddress ? true : false}
                />

              </Grid>
              <Grid item xs={4}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="address"
                  label="Enter Address"
                  id="address"
                  autoComplete="Enter Address"
                  onChange={formik.handleChange}
                  value={formik.values.address}
                  helperText={
                    formik.errors.address ? formik.errors.address : ''
                  }
                  error={formik.errors.address ? true : false}
                />

                <TextField
                  margin="normal"
                  id="availabilityOfManufacturingLicenseId"
                  required
                  fullWidth
                  select
                  label="Select Availability of Manufacturing License"
                  name="availabilityOfManufacturingLicenseId"
                  defaultValue="Select"
                  onChange={formik.handleChange}
                  value={formik.values.availabilityOfManufacturingLicenseId}
                  helperText={
                    formik.errors.availabilityOfManufacturingLicenseId
                      ? formik.errors.availabilityOfManufacturingLicenseId
                      : ''
                  }
                  error={
                    formik.errors.availabilityOfManufacturingLicenseId
                      ? true
                      : false
                  }
                  onFocus={() => getContentTypeData({ 'type': 'ManufacturerLicense' })}
                  >
                  {dropdownValue?.ManufacturerLicense && dropdownValue?.ManufacturerLicense?.map((value, index) => (
                      <MenuItem key={index} value={value._id}>
                        {value.title}
                      </MenuItem>
                    ))}
                </TextField>

                <TextField
                  margin="normal"
                  id="equipmentsId"
                  required
                  fullWidth
                  select
                  label="Select equipmentsId"
                  name="equipmentsId"
                  defaultValue="Select"
                  onChange={formik.handleChange}
                  value={formik.values.equipmentsId}
                  helperText={
                    formik.errors.equipmentsId ? formik.errors.equipmentsId : ''
                  }
                  error={formik.errors.equipmentsId ? true : false}
                  onFocus={() => getContentTypeData({ 'type': 'Equipment' })}
                  >
                    {dropdownValue?.Equipment && dropdownValue?.Equipment?.map((value, index) => (
                      <MenuItem key={index} value={value._id}>
                        {value.title}
                      </MenuItem>
                    ))}
                </TextField>

                <TextField
                  margin="normal"
                  id="indianGmpStatusId"
                  required
                  fullWidth
                  select
                  label="Select Indian GMP Status"
                  name="indianGmpStatusId"
                  defaultValue="Select"
                  onChange={formik.handleChange}
                  value={formik.values.indianGmpStatusId}
                  helperText={
                    formik.errors.indianGmpStatusId
                      ? formik.errors.indianGmpStatusId
                      : ''
                  }
                  error={formik.errors.indianGmpStatusId ? true : false}
                  onFocus={() => getContentTypeData({ 'type': 'IndianGmpStatus' })}
                  >
                   {dropdownValue?.IndianGmpStatus && dropdownValue?.IndianGmpStatus?.map((value, index) => (
                      <MenuItem key={index} value={value._id}>
                        {value.title}
                      </MenuItem>
                    ))}
                </TextField>

                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="plantName"
                  label="Enter Plant Name"
                  name="plantName"
                  autoComplete="plantName"
                  onChange={formik.handleChange}
                  value={formik.values.plantName}
                  helperText={
                    formik.errors.plantName ? formik.errors.plantName : ''
                  }
                  error={formik.errors.plantName ? true : false}
                />


                <TextField
                  margin="normal"
                  id="typeOfProductsId"
                  required
                  fullWidth
                  select
                  label="Select Type of Products"
                  name="typeOfProductsId"
                  defaultValue="Select"
                  onChange={formik.handleChange}
                  value={formik.values.typeOfProductsId}
                  helperText={
                    formik.errors.typeOfProductsId
                      ? formik.errors.typeOfProductsId
                      : ''
                  }
                  error={formik.errors.typeOfProductsId ? true : false}
                  onFocus={() => getContentTypeData({ 'type': 'TypesofProduct' })}
                  >
                   {dropdownValue?.TypesofProduct && dropdownValue?.TypesofProduct?.map((value, index) => (
                      <MenuItem key={index} value={value._id}>
                        {value.title}
                      </MenuItem>
                    ))}
                </TextField>
              </Grid>
            </Grid>

            <Grid container spacing={2} style={{ marginTop: '5px' }}>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  // disabled={isLoading}
                >
                  {/* {isLoading ? 'Please wait...' : 'Submit'} */}Submit
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
                  component="a"
                  href="/admin/manufacturers"
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Card>
      </Container>

      <Footer />
    </>
  );
}

export default ApplicationsAddManufacturers;
