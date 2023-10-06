import { Helmet } from 'react-helmet-async';
import PageTitle from 'src/components/PageTitle';
import { useState } from 'react';

import PageTitleWrapper from 'src/components/PageTitleWrapper';
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Button
} from '@mui/material';
import Footer from 'src/components/Footer';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

import Switch from '@mui/material/Switch';
import PageHeader from 'src/components/PageHeader';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const currencies = [
  {
    value: 'USD',
    label: '$'
  },
  {
    value: 'EUR',
    label: '€'
  },
  {
    value: 'BTC',
    label: '฿'
  },
  {
    value: 'JPY',
    label: '¥'
  }
];

function AddUser() {
  const [currency, setCurrency] = useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const [value, setValue] = useState(30);

  const handleChange2 = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Helmet>
        <title>Add User - Components</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader
          actionText="Back"
          title={'Add User'}
          subTitle=""
          handleClick="/master/list"
        />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={6}>
            <Card>
              <CardHeader title="Input Fields" />
              <Divider />
              <CardContent>
                <Box
                  component="form"
                  // sx={{
                  //   '& .MuiTextField-root': { m: 1, width: '25ch' }
                  // }}
                  // noValidate
                  // autoComplete="off"
                >
                  {/* <div> */}
                  <TextField id="outlined-required" label="Name" fullWidth />
                  <br />
                  <br />
                  {/* <TextField id="outlined-disabled" label="Email" fullWidth /> */}
                  <TextField id="outlined-disabled" label="Place" fullWidth />
                  <br />
                  <br />
                  <Button
                    sx={{ mt: { xs: 2, md: 0 } }}
                    variant="contained"
                    fullWidth
                    //   startIcon={<AddTwoToneIcon fontSize="small" />}
                  >
                    Submit
                  </Button>
                  {/* </div> */}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default AddUser;

const userType = ['user', 'admin', 'master'];
const userStatus = ['active', 'inactive', 'panding'];
