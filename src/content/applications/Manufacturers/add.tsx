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
  

  const [dropdownValue ,setDropdownvalue] = useState({Personel:[],Activity:[],InternationalGmpStatus:[],ManufacturerLicense:[],Equipment:[],TypesofProduct:[],Section:[],IndianGmpStatus:[],NonPharmaActivities:[],DosageForm:[],BatchesFrequently:[]});
  const validateSchema = yup.object().shape({
    manufacturer_name: yup.string().required('The name field is required'),
    city: yup.string().required('The city field is required'),
    country: yup.string().required('The country field is required'),
    personel: yup.string().required('The personel field is required'),
    dosage_forms: yup.string().required('The dosage forms field is required'),
    gst_no: yup.string().required('The gst number field is required'),
    activities: yup.string().required('The activities field is required'),
    type_of_products: yup
      .string()
      .required('The types of products field is required'),
      batchesFrequently: yup
      .string()
      .required('The types of products field is required'),
    international_gmp_status: yup
      .string()
      .required('The international GMP status field is required'),
    no_of_plants: yup.string().required('The no of plants field is required'),
    personal: yup.string().required('The personal field is required'),
    sections_dosage_froms_approved: yup
      .string()
      .required('The sections dosage forms approved field is required'),
    non_pharma_activities: yup
      .string()
      .required('The non pharma activities field is required'),
    availability_of_manufacturing_license: yup
      .string()
      .required('The availability of manufacturing license field is required'),
    address: yup.string().required('The address field is required'),
    equipments: yup.string().required('The equipments field is required'),
    indian_gmp_status: yup
      .string()
      .required('The indian GMP status state GMP field is required'),
    plant_name: yup.string().required('The plant name field is required'),
    plant_address: yup.string().required('The plant address field is required')
  });

  const formik = useFormik({
    initialValues: {
      manufacturer_name: '',
      gst_no: '',
      activities: '',
      type_of_products: '',
      international_gmp_status: '',
      no_of_plants: '',
      plantsDocument: '',
      personal: '',
      sections_dosage_froms_approved: '',
      non_pharma_activities: '',
      availability_of_manufacturing_license: '',
      address: '',
      equipments: '',
      indian_gmp_status: '',
      plant_name: '',
      plant_address: '',
      city: '',
      country: '',
      personel: '',
      dosage_forms: '',
      batchesFrequently:'',
    },
    validationSchema: validateSchema,
    onSubmit: async (values, { resetForm }) => {
      dispatch(addManufactur(values));
      console.log(values);
    }
  });

  const [
    availability_of_manufacturing_license,
    setAvailabilityOfManufacturingLicense
  ] = useState('');

  const [activities, setActivities] = useState('');
  const [personal, setPersonal] = useState('');
  const [equipments, setEquipments] = useState('');
  const [type_of_products, setTypesOfProducts] = useState('');
  const [sections_dosage_froms_approved, setSectionsDosageFormsApproved] =
    useState('');
  const [indian_gmp_status, setIndianGMPStatusStateGMP] = useState('');
  const [international_gmp_status, setInternationalGMPStatus] = useState('');
  const [non_pharma_activities, setNonPharmaActivities] = useState('');
  const [batchesFrequently, setbatchesFrequently] = useState('');
  

  const handleChangeAvailabilityOfManufacturingLicense = (
    event: SelectChangeEvent
  ) => {
    setAvailabilityOfManufacturingLicense(event.target.value);
  };

  const handleChangeActivities = (event: SelectChangeEvent) => {
    setActivities(event.target.value);
  };

  const handleChangePersonal = (event: SelectChangeEvent) => {
    setPersonal(event.target.value);
  };

  const handleChangeEquipments = (event: SelectChangeEvent) => {
    setEquipments(event.target.value);
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
  const handleChangeNonPharmaActivities = (event: SelectChangeEvent) => {
    setNonPharmaActivities(event.target.value);
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
                  id="manufacturer_name"
                  label="Enter Full Name"
                  name="manufacturer_name"
                  autoComplete="manufacturer_name"
                  onChange={formik.handleChange}
                  value={formik.values.manufacturer_name}
                  helperText={
                    formik.errors.manufacturer_name
                      ? formik.errors.manufacturer_name
                      : ''
                  }
                  error={formik.errors.manufacturer_name ? true : false}
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
                  name="dosage_forms"
                  label="Enter Dosage Form"
                  id="dosage_forms"
                  defaultValue="Select Dosage Form"
                  autoComplete="Enter Dosage Form"
                  onChange={formik.handleChange}
                  value={formik.values.dosage_forms}
                  onFocus={() => getContentTypeData({ 'type': 'DosageForm' })}
                  helperText={
                    formik.errors.dosage_forms ? formik.errors.dosage_forms : ''
                  }
                  error={formik.errors.dosage_forms ? true : false}
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
                  name="gst_no"
                  label="Enter GST Number"
                  id="gst_no"
                  autoComplete="Enter GST Number"
                  onChange={formik.handleChange}
                  value={formik.values.gst_no}
                  helperText={formik.errors.gst_no ? formik.errors.gst_no : ''}
                  error={formik.errors.gst_no ? true : false}
                />
                


                <TextField
                  margin="normal"
                  id="international_gmp_status"
                  required
                  fullWidth
                  select
                  label="Select International GMP Status"
                  name="international_gmp_status"
                  defaultValue="Select"
                  onChange={formik.handleChange}
                  value={formik.values.international_gmp_status}
                  helperText={
                    formik.errors.international_gmp_status
                      ? formik.errors.international_gmp_status
                      : ''
                  }
                  error={formik.errors.international_gmp_status ? true : false}
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
                  name="no_of_plants"
                  label="No.of Plants"
                  id="no_of_plants"
                  autoComplete="No.of Plants"
                  onChange={formik.handleChange}
                  value={formik.values.no_of_plants}
                  helperText={
                    formik.errors.no_of_plants ? formik.errors.no_of_plants : ''
                  }
                  error={formik.errors.no_of_plants ? true : false}
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
                  id="personal"
                  required
                  fullWidth
                  select
                  label="Select Personel"
                  name="personal"
                  defaultValue="Select Personal"
                  onChange={formik.handleChange}
                  value={formik.values.personal}
                  helperText={
                    formik.errors.personal ? formik.errors.personal : ''
                  }
                  error={formik.errors.personal ? true : false}
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
                  id="sections_dosage_froms_approved"
                  required
                  fullWidth
                  select
                  label="Select Sons Dosage Froms Approved"
                  name="sections_dosage_froms_approved"
                  defaultValue="Select"
                  onChange={formik.handleChange}
                  value={formik.values.sections_dosage_froms_approved}
                  helperText={
                    formik.errors.sections_dosage_froms_approved
                      ? formik.errors.sections_dosage_froms_approved
                      : ''
                  }
                  error={
                    formik.errors.sections_dosage_froms_approved ? true : false
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
                  id="non_pharma_activities"
                  required
                  fullWidth
                  select
                  label="Select Non Pharma Activities"
                  name="non_pharma_activities"
                  defaultValue="Select"
                  onChange={formik.handleChange}
                  value={formik.values.non_pharma_activities}
                  helperText={
                    formik.errors.non_pharma_activities
                      ? formik.errors.non_pharma_activities
                      : ''
                  }
                  error={formik.errors.non_pharma_activities ? true : false}
                  onFocus={() => getContentTypeData({ 'type': 'NonPharmaActivities' })}
                  >
                  {dropdownValue?.NonPharmaActivities && dropdownValue?.NonPharmaActivities?.map((value, index) => (
                      <MenuItem key={index} value={value._id}>
                        {value.title}
                      </MenuItem>
                    ))}
                </TextField>

                <TextField
                  margin="normal"
                  id="activities"
                  required
                  fullWidth
                  select
                  label="Select Activities"
                  name="activities"
                  defaultValue="Select"
                  onChange={formik.handleChange}
                  value={formik.values.activities}
                  helperText={
                    formik.errors.activities ? formik.errors.activities : ''
                  }
                  error={formik.errors.activities ? true : false}
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
                  name="plant_address"
                  label="Enter Plant Address"
                  id="plant_address"
                  autoComplete="Enter GST Number"
                  onChange={formik.handleChange}
                  value={formik.values.plant_address}
                  helperText={
                    formik.errors.plant_address
                      ? formik.errors.plant_address
                      : ''
                  }
                  error={formik.errors.plant_address ? true : false}
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
                  id="availability_of_manufacturing_license"
                  required
                  fullWidth
                  select
                  label="Select Availability of Manufacturing License"
                  name="availability_of_manufacturing_license"
                  defaultValue="Select"
                  onChange={formik.handleChange}
                  value={formik.values.availability_of_manufacturing_license}
                  helperText={
                    formik.errors.availability_of_manufacturing_license
                      ? formik.errors.availability_of_manufacturing_license
                      : ''
                  }
                  error={
                    formik.errors.availability_of_manufacturing_license
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
                  id="equipments"
                  required
                  fullWidth
                  select
                  label="Select Equipments"
                  name="equipments"
                  defaultValue="Select"
                  onChange={formik.handleChange}
                  value={formik.values.equipments}
                  helperText={
                    formik.errors.equipments ? formik.errors.equipments : ''
                  }
                  error={formik.errors.equipments ? true : false}
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
                  id="indian_gmp_status"
                  required
                  fullWidth
                  select
                  label="Select Indian GMP Status"
                  name="indian_gmp_status"
                  defaultValue="Select"
                  onChange={formik.handleChange}
                  value={formik.values.indian_gmp_status}
                  helperText={
                    formik.errors.indian_gmp_status
                      ? formik.errors.indian_gmp_status
                      : ''
                  }
                  error={formik.errors.indian_gmp_status ? true : false}
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
                  id="plant_name"
                  label="Enter Plant Name"
                  name="plant_name"
                  autoComplete="plant_name"
                  onChange={formik.handleChange}
                  value={formik.values.plant_name}
                  helperText={
                    formik.errors.plant_name ? formik.errors.plant_name : ''
                  }
                  error={formik.errors.plant_name ? true : false}
                />


                <TextField
                  margin="normal"
                  id="type_of_products"
                  required
                  fullWidth
                  select
                  label="Select Type of Products"
                  name="type_of_products"
                  defaultValue="Select"
                  onChange={formik.handleChange}
                  value={formik.values.type_of_products}
                  helperText={
                    formik.errors.type_of_products
                      ? formik.errors.type_of_products
                      : ''
                  }
                  error={formik.errors.type_of_products ? true : false}
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
