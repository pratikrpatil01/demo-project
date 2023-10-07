import * as React from 'react';
import {
  Box,
  Card,
  Typography,
  Container,
  Divider,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Link
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useFormik } from 'formik';
import * as yup from 'yup';

import { styled } from '@mui/material/styles';
import { userLogin } from 'src/store/action/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import ApiServices from 'src/Network_call/apiservices';
import ApiEndPoints from 'src/Network_call/ApiEndPoints';
import { red } from '@mui/material/colors';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import ErrorSuccessMsg from '../Components/ErrorSuccessMsg';

const MainContent = styled(Box)(
  ({ theme }) => `
      height: 100%;
      display: flex;
      flex: 1;
      overflow: auto;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  `
);



function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const daTA = useSelector((store) => store.auth);
  const validateSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter a valid email')
      .required('The email field is required'),
    password: yup.string().required('The password field is required')
  });

  // console.log('daTA', daTA);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      user_type: 'admin'
    },
    validationSchema: validateSchema,
    onSubmit: async (values, { resetForm }) => {
      const response = await ApiServices('post', ApiEndPoints.Login, values);
     
      if (response.success) {
        dispatch(userLogin(response));
        resetForm();
        navigate('/dashboards');
      }else{
        showError(response.msg);
      } 
    }
  });

  const [errorMessage, setErrorMessage] =  React.useState('');
  const [successMessage, setSuccessMessage] =  React.useState('');

  // Function to show an error message
  const showError = (message) => {
    setErrorMessage(message);
  };

  // Function to show an success message
  const showSuccess = (message) => {
    setSuccessMessage(message);
  };

  // Function to hide the success message
  const hideMesssage = () => {
    setSuccessMessage('');
    setErrorMessage('');
  };


  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <MainContent>
        <Container maxWidth="md">
          <Box textAlign="center">
            <img
              alt="ProCuriit"
              height={180}
              src="/static/images/logo/procuriit-horizontal.jpg"
            />
            <Typography variant="h2" sx={{ my: 2 }}>
              Login
            </Typography>
          </Box>
          <Container maxWidth="sm">
          
            <Card sx={{ textAlign: 'center', mt: 3, p: 4 }}>
               
              <ErrorSuccessMsg onClose={hideMesssage} message={successMessage?successMessage:errorMessage} success={!!successMessage}/>
              
              <Box
                component="form"
                onSubmit={formik.handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  helperText={formik.errors.email ? formik.errors.email : ''}
                  error={formik.errors.email ? true : false}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  error={formik.errors.password ? true : false}
                  helperText={
                    formik.errors.password ? formik.errors.password : ''
                  }
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                  sx={{ marginRight: '340px' }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                  <Link href="/admin/forgot-password" underline="hover"> Forgot Password?</Link>
               
              </Box>
            </Card>
          </Container>
        </Container>
      </MainContent>
    </>
  );
}

export default Login;
