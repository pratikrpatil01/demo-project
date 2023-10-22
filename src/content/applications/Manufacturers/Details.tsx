import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import {
  Grid,
  Container,
  Stack,
  InputLabel,
  FormControl,
  TextField,
  Card,
  CardContent,
  Typography,
  Box,
  useTheme,
  Button,
  Divider,
  MenuItem
} from '@mui/material';
import Footer from 'src/components/Footer';

import RecentOrders from './RecentOrders';
import List from './List';
import PageHeader from 'src/components/PageHeader';
import MaterialTable from 'src/components/Table/materialTable';
import { Columns } from 'src/utils/commonFunction';
import ProductList from '../Product';
import { useLocation, useParams } from 'react-router';
import { useEffect } from 'react';
import { dispatch, useSelector } from 'src/store';
import { GetManufacturerDetails } from 'src/store/reducers/manufacturer';
import { Link } from 'react-router-dom';

function ManufacturerDetails() {
  const { id } = useParams();

  const { ManufacturerDetails } = useSelector(
    (store: any) => store.manufacturerSlice
  );

  const data = ManufacturerDetails[0];
 

  useEffect(() => {
    dispatch(GetManufacturerDetails({ manufacture_id: id }));
  }, []);
  const theme = useTheme();
  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg'
  };

  const key = [
    'sr',
    'products',
    'strength',
    'dosage_forms',
    'packing',
    'dossier',
    'list_of_countries',
    'COA',
    'COPP'
  ];
  const columns = Columns(key);

  const TableAction = (row) => {
    const action = [
      <MenuItem
        key="Details"
        // onClick={() => navigate(`/admin/manufacturers/details/${row.id}`)}
      >
        Add Documentation
      </MenuItem>,
      <MenuItem
        key="edit"
        // onClick={() => navigate(`/manufacturer/add-plant/${row.id}`)}
      >
        Add Development
      </MenuItem>
    ];
    return action;
  };

  return (
    <>
      <Helmet>
        <title>Manufacturers Details</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader
          title={'Manufacturers Details'}
          actionText={false}
          subTitle={`these are ${user.name}  Manufacturer Details`}
          handleClick={''}
        />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Card>
          <Typography variant="h4" p={3}>
            Manufacturers Details
          </Typography>
          <Box px={2} p={5} py={4} display="flex" alignItems="flex-start">
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="stretch"
              spacing={3}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                  <Typography variant="h4">Manufacturer Name</Typography>
                  <Typography>{data?.manufacturerName}</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Typography variant="h4">Address</Typography>
                  <Typography>{data?.address}</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Typography variant="h4">GST Number</Typography>
                  <Typography>{data?.gstNumber}</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Typography variant="h4">NO. of Plants</Typography>
                  <Typography>{data?.numOfPlants}</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Typography variant="h4">Company Document</Typography>
                  <Typography>{data?.plantDocument[0]}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Card>
        <br />
        <Card>
          <Box pl={2} pt={2} flex={1}>
            <Box
              pt={0}
              pr={2}
              pb={1}
              display="flex"
              justifyContent="space-between"
            >
              <Typography variant="h3">Plant Name</Typography>

              <Box pr={8}>
                <Stack spacing={1}>
                  {/* <InputLabel>Search</InputLabel> */}
                  <FormControl sx={{ width: '100%' }}>
                    <TextField
                      label="Search"
                      value={''}
                      name="*Manufacturer Name"
                      id="*Manufacturer Name"
                      size="small"
                    />
                  </FormControl>
                </Stack>
              </Box>
              <Box>
                <Link to={`/admin/product/add/${id}`}>
                  <Button
                    // href={`/admin/product/add/${id}`}
                    sx={{ mt: { xs: 2, md: 0 }, mr: '10px' }}
                    variant="contained"
                  >
                    Add Product
                  </Button>
                </Link>
                <Button
                  // href={`${handleCkick}`}

                  sx={{ mt: { xs: 2, md: 0 } }}
                  variant="contained"
                >
                  Audit
                </Button>
              </Box>
            </Box>
            <Divider />
            <Divider />
          </Box>

          <Box px={2} p={5} py={4} display="flex" alignItems="flex-start">
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="stretch"
              spacing={3}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                  <Typography variant="h4"> Plant title</Typography>
                  <Typography> {data?.plantName}</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Typography variant="h4">Address</Typography>
                  <Typography>{data?.plantAddress}</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Typography variant="h4"> Dosage forms</Typography>
                  <Typography> {data?.dosageFormsId}</Typography>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <Typography variant="h4">
                    plants document(Note:- Select All Document)
                  </Typography>
                  <Typography>{data?.plantDocument[0]}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Card>
        <br />
        <Card>
          <Box pt={2} flex={1}>
            <Box
              pt={0}
              pr={2}
              pb={1}
              pl={2}
              display="flex"
              justifyContent="space-between"
            >
              <Typography variant="h3">Products Information</Typography>

              <Box>
                <Link to={`/admin/product/edit/${id}`}>
                  <Button
                    // href={`/admin/product/edit/${id}`}
                    sx={{ mt: { xs: 2, md: 0 }, mr: '10px' }}
                    variant="contained"
                  >
                    Edit Product
                  </Button>
                </Link>
              </Box>
            </Box>
            <Grid item xs={12} pl={-2}>
              <ProductList data={data?.products} />
            </Grid>
            <Grid pl={2}>
              <Typography sx={{ font: 'bold' }}>
                <b>
                  ** For view product documentation and international business
                  development press Button
                </b>
              </Typography>
              <Typography>
                NOTE :- When developing, the scroll bar will come here.
              </Typography>
            </Grid>
          </Box>
        </Card>
      </Container>
      <Footer />
    </>
  );
}

export default ManufacturerDetails;

const data = [];

const products = [
  'Paracetamol',
  'Aspirin',
  'Ibuprofen',
  'Amoxicillin',
  'Lisinopril',
  'Atorvastatin',
  'Omeprazole',
  'Metformin',
  'Losartan',
  'Simvastatin'
];
const strengthOptions = [
  '500mg',
  '1000mg',
  '50mg',
  '200mg',
  '10mg',
  '20mg',
  '25mg'
];
const dosageForms = [
  'Tablets',
  'Capsules',
  'Syrup',
  'Injection',
  'Cream',
  'Ointment'
];
const packingOptions = ['ALU', 'Blister', 'Bottle', 'Box', 'Tube'];
const listCountries = [
  'India',
  'USA',
  'UK',
  'Canada',
  'Australia',
  'Germany',
  'France',
  'Japan'
];

for (let i = 1; i <= 10; i++) {
  const medicine = {
    sr: i,
    products: products[Math.floor(Math.random() * products.length)],
    strength:
      strengthOptions[Math.floor(Math.random() * strengthOptions.length)],
    dosage_forms: dosageForms[Math.floor(Math.random() * dosageForms.length)],
    packing: packingOptions[Math.floor(Math.random() * packingOptions.length)],
    dossier: 'adc.docx',
    list_of_countries:
      listCountries[Math.floor(Math.random() * listCountries.length)],
    COA: Math.random() > 0.5 ? 'Available' : '', // Randomly set to 'Available' or empty
    COPP: Math.random() > 0.5 ? 'Available' : ''
  };

  data.push(medicine);
}
