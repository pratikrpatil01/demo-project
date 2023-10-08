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

function ManufacturerDetails() {
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
                  <Stack spacing={1}>
                    <InputLabel>*Manufacturer Name</InputLabel>
                    <FormControl sx={{ width: '100%' }}>
                      <TextField
                        disabled
                        value={''}
                        name="*Manufacturer Name"
                        id="*Manufacturer Name"
                        aria-readonly
                      />
                    </FormControl>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack spacing={1}>
                    <InputLabel>Address</InputLabel>
                    <FormControl sx={{ width: '100%' }}>
                      <TextField
                        disabled
                        value={''}
                        name="Address"
                        id="Address"
                        aria-readonly
                      />
                    </FormControl>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack spacing={1}>
                    <InputLabel>GST Number</InputLabel>
                    <FormControl sx={{ width: '100%' }}>
                      <TextField
                        disabled
                        value={''}
                        name="GST Number"
                        id="GST Number"
                        aria-readonly
                      />
                    </FormControl>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack spacing={1}>
                    <InputLabel>NO. of Plants</InputLabel>
                    <FormControl sx={{ width: '100%' }}>
                      <TextField
                        disabled
                        value={''}
                        name="NO. of Plants"
                        id="NO. of Plants"
                        aria-readonly
                      />
                    </FormControl>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack spacing={1}>
                    <InputLabel>NO. of Plants</InputLabel>
                    <FormControl sx={{ width: '100%' }}>
                      <TextField
                        disabled
                        // value={'dgsfdgsf.png'}
                        type="file"
                        name="NO. of Plants"
                        id="NO. of Plants"
                        aria-readonly
                      />
                    </FormControl>
                  </Stack>
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
                <Button
                  // href={`${handleCkick}`}
                  sx={{ mt: { xs: 2, md: 0 }, mr: '10px' }}
                  variant="contained"
                >
                  Add Product
                </Button>
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
                  <Stack spacing={1}>
                    <InputLabel>*Plant title</InputLabel>
                    <FormControl sx={{ width: '100%' }}>
                      <TextField
                        disabled
                        value={''}
                        name="* Plant title"
                        id="* Plant title"
                        aria-readonly
                      />
                    </FormControl>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack spacing={1}>
                    <InputLabel>*Address</InputLabel>
                    <FormControl sx={{ width: '100%' }}>
                      <TextField
                        disabled
                        value={''}
                        name="Address"
                        id="Address"
                        aria-readonly
                      />
                    </FormControl>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Stack spacing={1}>
                    <InputLabel>*Dosage forms</InputLabel>
                    <FormControl sx={{ width: '100%' }}>
                      <TextField
                        disabled
                        value={''}
                        name="Dosage forms"
                        id="Dosage forms"
                        aria-readonly
                      />
                    </FormControl>
                  </Stack>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <Stack spacing={1}>
                    <InputLabel>
                      *plants document(Note:- Select All Document)
                    </InputLabel>
                    <FormControl sx={{ width: '100%' }}>
                      <TextField
                        disabled
                        // value={'dgsfdgsf.png'}
                        type="file"
                        name="plants document(Note:- Select All Document)"
                        id="plants document(Note:- Select All Document)"
                        aria-readonly
                      />
                    </FormControl>
                  </Stack>
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
                <Button
                  // href={`${handleCkick}`}
                  sx={{ mt: { xs: 2, md: 0 }, mr: '10px' }}
                  variant="contained"
                >
                  Edit Product
                </Button>
              </Box>
            </Box>
            <Grid item xs={12} pl={-2}>
              <MaterialTable
                data={data || []}
                isLoading={false}
                columns={columns}
                getData={''}
                rowCount={data?.length}
                tableAction={TableAction}
                Filter={<></>}
                title=""
              />
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
