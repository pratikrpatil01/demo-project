import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import EditPageHeader from './EditPageHeader';
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
    SelectChangeEvent 
    
  } from '@mui/material';

import RecentOrders from './RecentOrders';
import List from './List';
import { useFormik } from 'formik';
import * as yup from 'yup';

function ApplicationsEditManufacturers() {


  const validateSchema = yup.object().shape({
       name: yup.string().required('The name field is required'),
       gstNumber: yup.string().required('The gst number field is required'),
       activities: yup.string().required('The activities field is required'),
       typesOfProducts: yup.string().required('The types of products field is required'),
       internationalGMPStatus: yup.string().required('The international GMP status field is required'),
       noOfPlants: yup.string().required('The no of plants field is required'),
       plantsDocument: yup.string().required('The plants document field is required'),
       personal: yup.string().required('The personal field is required'),
       sectionsDosageFormsApproved: yup.string().required('The sections dosage forms approved field is required'),
       nonPharmaActivities: yup.string().required('The non pharma activities field is required'),
       availabilityOfManufacturingLicense: yup.string().required('The availability of manufacturing license field is required'),
       address: yup.string().required('The address field is required'),
       equipments: yup.string().required('The equipments field is required'),
       indianGMPStatusStateGMP: yup.string().required('The indian GMP status state GMP field is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      gstNumber: '',
      activities:'',
      typesOfProducts:'',
      internationalGMPStatus: '',
      noOfPlants: '',
      plantsDocument:'',
      personal:'',
      sectionsDosageFormsApproved: '',
      nonPharmaActivities: '',
      availabilityOfManufacturingLicense:'',
      address:'',
      equipments:'',
      indianGMPStatusStateGMP:''

    },
    validationSchema: validateSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);

      setTimeout(() => {
        resetForm();
      }, 1000 * 2);
    }
  });

 const [availabilityofmanufacturinglicense, setAvailabilityOfManufacturingLicense] = React.useState('');

 const [activities, setActivities] = React.useState('');
 const [personal, setPersonal] = React.useState('');
 const [equipments, setEquipments] = React.useState('');
 const [typesOfProducts, setTypesOfProducts] = React.useState('');
 const [sectionsDosageFormsApproved, setSectionsDosageFormsApproved] = React.useState('');
 const [indianGMPStatusStateGMP, setIndianGMPStatusStateGMP] = React.useState('');
 const [internationalGMPStatus, setInternationalGMPStatus] = React.useState('');
 const [nonPharmaActivities, setNonPharmaActivities] = React.useState('');


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
        <EditPageHeader />
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
                  id="name"
                  label="Enter Full Name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  helperText={formik.errors.name ? formik.errors.name : ''}
                 
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="gstNumber"
                  label="Enter GST Number"
                  id="gstNumber"
                  autoComplete="Enter GST Number"
                  autoFocus
                  onChange={formik.handleChange}
                  value={formik.values.gstNumber}
                  helperText={formik.errors.gstNumber ? formik.errors.gstNumber : ''}
                />
                <FormControl margin="normal" fullWidth>
                    <InputLabel id="activities">Activities</InputLabel>
                    
                    <Select
                        labelId="activities"
                        id="activities"
                        name="activities"
                        label="Activities"
                        value={formik.activities}
                        onChange={formik.handleChangeActivities}
                        autoFocus
                        helperText={formik.errors.activities ? formik.errors.activities : ''}
                       
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                        <MenuItem value={1}>Manufacturing</MenuItem>
                        <MenuItem value={2}>Quality Control</MenuItem>
                        <MenuItem value={3}>Packaging</MenuItem>
                        <MenuItem value={4}>Batch Release</MenuItem>
                    </Select>
                </FormControl>

                <FormControl margin="normal" fullWidth>
                    <InputLabel id="typesOfProducts">Types Of Products</InputLabel>
                    <Select
                        labelId="typesOfProducts"
                        id="typesOfProducts"
                        name="typesOfProducts"
                        value={formik.typesOfProducts}
                        label="Types Of Products"
                        onChange={formik.handleChangeTypesOfProducts}
                        autoFocus
                        helperText={formik.errors.typesOfProducts ? formik.errors.typesOfProducts : ''}
                        
                    >
                        
                        <MenuItem value={10}>Human</MenuItem>
                        <MenuItem value={20}>Veterinanry</MenuItem>
                        <MenuItem value={30}>Both</MenuItem>
                    </Select>
                </FormControl>

                <FormControl margin="normal" fullWidth>
                    <InputLabel id="internationalGMPStatus">International GMP Status</InputLabel>
                    <Select
                        labelId="internationalGMPStatus"
                        name="internationalGMPStatus"
                        id="internationalGMPStatus"
                        value={formik.internationalGMPStatus}
                        label="International GMP Status"
                        onChange={formik.handleChangeInternationalGMPStatus}
                        autoFocus
                        helperText={formik.errors.internationalGMPStatus ? formik.errors.internationalGMPStatus : ''}
                    >
                        <MenuItem value={10}>PIC/S</MenuItem>
                        <MenuItem value={20}>EUGMP</MenuItem>
                        <MenuItem value={30}>USFDA</MenuItem>
                        <MenuItem value={40}>Country Specific</MenuItem>
                    </Select>
                </FormControl>

          </Grid>
          <Grid item xs={4}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="noOfPlants"
                  label="No.of Plants"
                  id="noOfPlants"
                  autoComplete="No.of Plants"
                  autoFocus
                  onChange={formik.handleChange}
                  value={formik.values.noOfPlants}
                  helperText={formik.errors.noOfPlants ? formik.errors.noOfPlants : ''}
                  
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="plantsDocument"
                  label="Plants Document"
                  type="file"
                  id="plants_document"
                  autoComplete="Plants Document"
                  autoFocus
                  onChange={formik.handleChange}
                  value={formik.values.plantsDocument}
                  helperText={formik.errors.plantsDocument ? formik.errors.plantsDocument : ''} 
                />

                  <FormControl margin="normal" fullWidth>
                    <InputLabel id="personal">Personal</InputLabel>
                    <Select
                        labelId="personal"
                        id="personal"
                        name="personal"
                        value={formik.personal}
                        label="Personal"
                        onChange={formik.handleChangePersonal}
                        autoFocus
                        helperText={formik.errors.personal ? formik.errors.personal : ''}
                    >
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Skilled</MenuItem>
                        <MenuItem value={20}>unskilled Control</MenuItem>
                    </Select>
                </FormControl>

                <FormControl margin="normal" fullWidth>
                    <InputLabel id="sectionsDosageFormsApproved">Sections - Dosage Forms Approved</InputLabel>
                    <Select
                        labelId="sectionsDosageFormsApproved"
                        id="sectionsDosageFormsApproved"
                        name="sectionsDosageFormsApproved"
                        value={formik.sectionsDosageFormsApproved}
                        label="Sections - Dosage Forms Approved"
                        onChange={formik.handleChangeSectionsDosageFormsApproved}
                        autoFocus
                        helperText={formik.errors.sectionsDosageFormsApproved ? formik.errors.sectionsDosageFormsApproved : ''}
                    >
                        <MenuItem value={10}>Tablets/Capsules</MenuItem>
                        <MenuItem value={20}>Oral liquid</MenuItem>
                        <MenuItem value={30}>Oral dry powder</MenuItem>
                        <MenuItem value={40}>Topical</MenuItem>
                        <MenuItem value={50}>Respiratory caps</MenuItem>
                    </Select>
                </FormControl>


                <FormControl margin="normal" fullWidth>
                    <InputLabel id="nonPharmaActivities">Non Pharma Activities</InputLabel>
                    <Select
                        labelId="nonPharmaActivities"
                        id="nonPharmaActivities"
                        name="nonPharmaActivities"
                        value={formik.nonPharmaActivities}
                        label="Non Pharma Activities"
                        onChange={formik.handleChangeNonPharmaActivities}
                        autoFocus
                        helperText={formik.errors.nonPharmaActivities ? formik.errors.nonPharmaActivities : ''}
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
                  
                />
               
               <FormControl margin="normal" fullWidth>
                    <InputLabel id="availability of manufacturing license">Availability Of Manufacturing License</InputLabel>
                    <Select
                        labelId="availability of manufacturing license"
                        id="availabilityOfManufacturingLicense"
                        name="availabilityOfManufacturingLicense"
                        value={formik.availabilityofmanufacturinglicense}
                        label="Availability Of Manufacturing License"
                        onChange={formik.handleChangeAvailabilityOfManufacturingLicense}
                        autoFocus
                        helperText={formik.errors.availabilityOfManufacturingLicense ? formik.errors.availabilityOfManufacturingLicense : ''}
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
                        value={formik.equipments}
                        label="Equipments"
                        onChange={formik.handleChangeEquipments}
                        autoFocus
                        helperText={formik.errors.equipments ? formik.errors.equipments : ''}
                    >
                        <MenuItem value={10}>Skilled</MenuItem>
                        <MenuItem value={20}>unskilled Control</MenuItem>
                    </Select>
                </FormControl>
                <FormControl margin="normal" fullWidth>
                    <InputLabel id="indianGMPStatusStateGMP">Indian GMP status - State GMP</InputLabel>
                    <Select
                        labelId="indianGMPStatusStateGMP"
                        id="indianGMPStatusStateGMP"
                        name="indianGMPStatusStateGMP"
                        value={formik.indianGMPStatusStateGMP}
                        label="Indian GMP status - State GMP"
                        onChange={formik.handleChangeIndianGMPStatusStateGMP}
                        autoFocus
                        helperText={formik.errors.indianGMPStatusStateGMP ? formik.errors.indianGMPStatusStateGMP : ''}
                    >
                        <MenuItem value={10}>State GMP</MenuItem>
                        <MenuItem value={20}>WHO-GMP</MenuItem>
                        <MenuItem value={30}>None</MenuItem>

                    </Select>
                </FormControl>
          </Grid>
          
        </Grid>
        
        <Grid container spacing={2} style={{marginTop:'16px'}}>
          <Grid item>
            <Button variant="contained" color="primary" type='submit'>
              Submit
            </Button>
          </Grid>
          <Grid item>
          <Button
            variant="contained"
            color="secondary"
            component="a" 
            href="/manufacturers" 
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

export default ApplicationsEditManufacturers;
