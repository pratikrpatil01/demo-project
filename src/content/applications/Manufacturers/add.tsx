import { useEffect, useState } from 'react';
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
    SelectChangeEvent ,
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

function ApplicationsAddManufacturers() {

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] =  useState('');
  const [successMessage, setSuccessMessage] =  useState('');
  const validateSchema = yup.object().shape({
      manufacturer_name: yup.string().required('The name field is required'),
      gst_no: yup.string().required('The gst number field is required'),
       activities: yup.string().required('The activities field is required'),
       type_of_products: yup.string().required('The types of products field is required'),
       international_gmp_status: yup.string().required('The international GMP status field is required'),
       no_of_plants: yup.string().required('The no of plants field is required'),
       plantsDocument: yup.string().required('The plants document field is required'),
       personel: yup.string().required('The personal field is required'),
       sections_dosage_froms_approved: yup.string().required('The sections dosage forms approved field is required'),
       non_pharma_activities: yup.string().required('The non pharma activities field is required'),
       availability_of_manufacturing_license: yup.string().required('The availability of manufacturing license field is required'),
       address: yup.string().required('The address field is required'),
       equipments: yup.string().required('The equipments field is required'),
       indian_gmp_status: yup.string().required('The indian GMP status state GMP field is required'),
       plant_name: yup.string().required('The plant name field is required'),
       plant_address: yup.string().required('The plant address field is required'),

  });

  const formik = useFormik({
    initialValues: {
      manufacturer_name: '',
      gst_no: '',
      activities:'',
      type_of_products:'',
      international_gmp_status: '',
      no_of_plants: '',
      plantsDocument:'',
      personel:'',
      sections_dosage_froms_approved: '',
      non_pharma_activities: '',
      availability_of_manufacturing_license:'',
      address:'',
      equipments:'',
      indian_gmp_status:'',
      plant_name:'',
      plant_address:''

    },
    validationSchema: validateSchema,
    onSubmit: async (values, { resetForm }) => {

      console.log(ApiEndPoints)
      setIsLoading(true);
      
    }
  });

 const [availability_of_manufacturing_license, setAvailabilityOfManufacturingLicense] = useState('');

 const [activities, setActivities] = useState('');
 const [personal, setPersonal] = useState('');
 const [equipments, setEquipments] = useState('');
 const [type_of_products, setTypesOfProducts] = useState('');
 const [sections_dosage_froms_approved, setSectionsDosageFormsApproved] = useState('');
 const [indian_gmp_status, setIndianGMPStatusStateGMP] = useState('');
 const [international_gmp_status, setInternationalGMPStatus] = useState('');
 const [non_pharma_activities, setNonPharmaActivities] = useState('');


  const handleChangeAvailabilityOfManufacturingLicense = (event: SelectChangeEvent) => {
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
  const handleChangeSectionsDosageFormsApproved = (event: SelectChangeEvent) => {
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

  return (
    <>
      <Helmet>
        <title>Add Manufacturers</title>
      </Helmet>
      <PageTitleWrapper>
        <AddPageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg" style={{height: '100%'}}>
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
                  autoFocus
                  onChange={formik.handleChange}
                  value={formik.values.manufacturer_name}
                  helperText={formik.errors.manufacturer_name ? formik.errors.manufacturer_name : ''}
                  error={formik.errors.manufacturer_name ? true : false}
                 
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="gst_no"
                  label="Enter GST Number"
                  id="gst_no"
                  autoComplete="Enter GST Number"
                  autoFocus
                  onChange={formik.handleChange}
                  value={formik.values.gst_no}
                  helperText={formik.errors.gst_no ? formik.errors.gst_no : ''}
                  error={formik.errors.gst_no ? true : false}
                />
                <FormControl margin="normal" fullWidth>
                    <InputLabel id="activities">Activities</InputLabel>
                    
                    <Select
                        
                        id="activities"
                        name="activities"
                        label="activities"
                        value={formik.values.activities}
                        onChange={formik.handleChange}
                        autoFocus
                        error={formik.errors.activities ? true : false} 
                       
                       
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                        <MenuItem value='Manufacturing'>Manufacturing</MenuItem>
                        <MenuItem value="Quality Control">Quality Control</MenuItem>
                        <MenuItem value="Packaging">Packaging</MenuItem>
                        <MenuItem value="Batch Release">Batch Release</MenuItem>
                    </Select>
                </FormControl>

                <FormControl margin="normal" fullWidth>
                    <InputLabel id="type_of_products">Types Of Products</InputLabel>
                    <Select
                        labelId="type_of_products"
                        id="type_of_products"
                        name="type_of_products"
                        value={formik.values.type_of_products}
                        label="Types Of Products"
                        onChange={formik.handleChange}
                        autoFocus
                        error={formik.errors.type_of_products ? true : false}
                        
                    >
                        
                        <MenuItem value='Human'>Human</MenuItem>
                        <MenuItem value='Veterinanry'>Veterinanry</MenuItem>
                        <MenuItem value='both'>Both</MenuItem>
                    </Select>
                </FormControl>

                <FormControl margin="normal" fullWidth>
                    <InputLabel id="international_gmp_status">International GMP Status</InputLabel>
                    <Select
                        labelId="international_gmp_status"
                        name="international_gmp_status"
                        id="international_gmp_status"
                        value={formik.values.international_gmp_status}
                        label="International GMP Status"
                        onChange={formik.handleChange}
                        autoFocus
                        error={formik.errors.type_of_products ? true : false}
                    >
                        <MenuItem value={10}>PIC/S</MenuItem>
                        <MenuItem value={20}>EUGMP</MenuItem>
                        <MenuItem value={30}>USFDA</MenuItem>
                        <MenuItem value={40}>Country Specific</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="plant_address"
                  label="Enter Plant Address"
                  id="plant_address"
                  autoComplete="Enter GST Number"
                  autoFocus
                  onChange={formik.handleChange}
                  value={formik.values.plant_address}
                  helperText={formik.errors.plant_address ? formik.errors.plant_address : ''}
                  error={formik.errors.plant_address ? true : false}
                />

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
                  autoFocus
                  onChange={formik.handleChange}
                  value={formik.values.no_of_plants}
                  helperText={formik.errors.no_of_plants ? formik.errors.no_of_plants : ''}
                  error={formik.errors.no_of_plants ? true : false}
                  
                />
                <TextField
                 style={{borderColor:'gray'}}
                  margin="normal"
                  required
                  fullWidth
                  name="plantsDocument"
                  label="Plants Document"
                  type="file"
                  id="plants_document"
                  autoComplete="Plants Document"
                  autoFocus
                  focused
                  onChange={formik.handleChange}
                  value={formik.values.plantsDocument}
                  helperText={formik.errors.plantsDocument ? formik.errors.plantsDocument : ''} 
                  error={formik.errors.plantsDocument ? true : false}
                />

                  <FormControl margin="normal" fullWidth>
                    <InputLabel id="personal">Personal</InputLabel>
                    <Select
                        labelId="personel"
                        id="personel"
                        name="personel"
                        value={formik.values.personel}
                        label="Personal"
                        onChange={formik.handleChange}
                        autoFocus
                        error={formik.errors.personel ? true : false}
                       
                    >
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Skilled</MenuItem>
                        <MenuItem value={20}>unskilled Control</MenuItem>
                    </Select>
                </FormControl>

                <FormControl margin="normal" fullWidth>
                    <InputLabel id="sections_dosage_froms_approved">Sections - Dosage Forms Approved</InputLabel>
                    <Select
                        labelId="sections_dosage_froms_approved"
                        id="sections_dosage_froms_approved"
                        name="sections_dosage_froms_approved"
                        value={formik.values.sections_dosage_froms_approved}
                        label="Sections - Dosage Forms Approved"
                        onChange={formik.handleChange}
                        autoFocus
                        error={formik.errors.sections_dosage_froms_approved ? true : false}
                    >
                        <MenuItem value={10}>Tablets/Capsules</MenuItem>
                        <MenuItem value={20}>Oral liquid</MenuItem>
                        <MenuItem value={30}>Oral dry powder</MenuItem>
                        <MenuItem value={40}>Topical</MenuItem>
                        <MenuItem value={50}>Respiratory caps</MenuItem>
                    </Select>
                </FormControl>


                <FormControl margin="normal" fullWidth>
                    <InputLabel id="non_pharma_activities">Non Pharma Activities</InputLabel>
                    <Select
                        labelId="nonPharmaActivities"
                        id="non_pharma_activities"
                        name="non_pharma_activities"
                        value={formik.values.non_pharma_activities}
                        label="Non Pharma Activities"
                        onChange={formik.handleChange}
                        autoFocus
                        error={formik.errors.non_pharma_activities ? true : false}
                        
                    >
                        <MenuItem value={10}>Yes</MenuItem>
                        <MenuItem value={20}>No</MenuItem>
                    </Select>
                </FormControl>
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
                  autoFocus
                  onChange={formik.handleChange}
                  value={formik.values.address}
                  helperText={formik.errors.address ? formik.errors.address : ''} 
                  error={formik.errors.address ? true : false}
                />
               
               <FormControl margin="normal" fullWidth>
                    <InputLabel id="availability_of_manufacturing_license">Availability Of Manufacturing License</InputLabel>
                    <Select
                        labelId="availability_of_manufacturing_license"
                        id="availability_of_manufacturing_license"
                        name="availability_of_manufacturing_license"
                        value={formik.values.availability_of_manufacturing_license}
                        label="Availability Of Manufacturing License"
                        onChange={formik.handleChange}
                        autoFocus
                        error={formik.errors.availability_of_manufacturing_license ? true : false}
                    >
                        <MenuItem value={10}>Local FDA</MenuItem>
                        <MenuItem value={20}>FSSAI</MenuItem>
                        <MenuItem value={30}>CDSCO</MenuItem>
                        <MenuItem value={40}>Ayush</MenuItem>
                        <MenuItem value={50}>Others</MenuItem>
                    </Select>
                </FormControl>
                <FormControl margin="normal" fullWidth>
                    <InputLabel id="equipments">Equipments</InputLabel>
                    <Select
                        labelId="Equipments"
                        id="equipments"
                        name="equipments"
                        value={formik.values.equipments}
                        label="Equipments"
                        onChange={formik.handleChange}
                        autoFocus
                        error={formik.errors.equipments ? true : false}
                    >
                        <MenuItem value={10}>Skilled</MenuItem>
                        <MenuItem value={20}>unskilled Control</MenuItem>
                    </Select>
                </FormControl>
                <FormControl margin="normal" fullWidth>
                    <InputLabel id="indianGMPStatusStateGMP">Indian GMP status - State GMP</InputLabel>
                    <Select
                        labelId="indian_gmp_status"
                        id="indian_gmp_status"
                        name="indian_gmp_status"
                        value={formik.values.indian_gmp_status}
                        label="Indian GMP status - State GMP"
                        onChange={formik.handleChange}
                        autoFocus
                        error={formik.errors.indian_gmp_status ? true : false}
                    >
                        <MenuItem value={10}>State GMP</MenuItem>
                        <MenuItem value={20}>WHO-GMP</MenuItem>
                        <MenuItem value={30}>None</MenuItem>

                    </Select>
                </FormControl>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="plant_name"
                  label="Enter Plant Name"
                  name="plant_name"
                  autoComplete="plant_name"
                  autoFocus
                  onChange={formik.handleChange}
                  value={formik.values.plant_name}
                  helperText={formik.errors.plant_name ? formik.errors.plant_name : ''}
                  error={formik.errors.plant_name ? true : false}
                 
                />
          </Grid>
          
        </Grid>
        
        <Grid container spacing={2} style={{marginTop:'16px'}}>
          <Grid item>
            <Button variant="contained" color="primary" type='submit' disabled={isLoading}>
            {isLoading ? 'Please wait...' : 'Submit'}
              
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
      </Container>
      <Footer />
    </>
  );
}

export default ApplicationsAddManufacturers;
