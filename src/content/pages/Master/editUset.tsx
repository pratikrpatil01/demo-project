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
import { useLocation } from 'react-router';

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

function EditUser() {
  const location: any = useLocation();
  const data = location?.state?.data;
  const [status, setStatus] = useState(data?.status);
  const [type, setType] = useState(data?.type);

  console.log(location);
  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const [value, setValue] = useState(30);

  const handleChange2 = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Helmet>
        <title>Edit User - Components</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader
          actionText="Back"
          title={'Edit User'}
          subTitle=""
          link="/master/list"
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
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Input Fields" />
              <Divider />
              <CardContent>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' }
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <TextField
                      id="outlined-required"
                      label="Name"
                      defaultValue={data.name}
                      fullWidth
                    />
                    <TextField
                      id="outlined-disabled"
                      label="Email"
                      defaultValue={data.email}
                      fullWidth
                    />
                    <TextField
                      id="outlined-disabled"
                      label="Place"
                      defaultValue={data.place}
                      fullWidth
                    />

                    <TextField
                      defaultValue={data.status}
                      id="outlined-select-currency"
                      select
                      label="Status"
                      value={status}
                      onChange={handleChange}
                      //   helperText="Please select your status"
                    >
                      {userStatus.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      defaultValue={data.type}
                      id="outlined-select-currency"
                      select
                      label="Type"
                      value={type}
                      onChange={handleChangeType}
                      //   helperText="Please select your user type"
                    >
                      {userType.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                    <Button
                      sx={{ mt: { xs: 2, md: 0 } }}
                      variant="contained"

                      //   startIcon={<AddTwoToneIcon fontSize="small" />}
                    >
                      Submit
                    </Button>
                  </div>
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

export default EditUser;

const userType = ['user', 'admin', 'master'];
const userStatus = ['active', 'inactive', 'panding'];
