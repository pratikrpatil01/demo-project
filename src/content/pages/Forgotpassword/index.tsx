import { useEffect, useState } from 'react';
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
import { useFormik } from "formik";
import * as yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { styled } from '@mui/material/styles';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import ApiServices from 'src/Network_call/apiservices';
import ApiEndPoints from 'src/Network_call/ApiEndPoints';
import {Warning} from '../Components/Alert';
import {Success} from '../Components/Alert';
import {Danger} from '../Components/Alert';

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

function Forgotpassword() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] =  useState('');
  const [successMessage, setSuccessMessage] =  useState('');

  const [isLoading, setIsLoading] = useState(false);

  const validateSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("The email field is required"),
    
  });

  const formik = useFormik({
    initialValues: {
      email: "",

    },
    validationSchema: validateSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsLoading(true);
      const response = await ApiServices('post', ApiEndPoints.ForgotPassword, values);
    
      if (response.success) {
        setSuccessMessage(response.msg);
        setIsLoading(false);
        //navigate('/admin/reset-password');
        resetForm();
      }else{
        setErrorMessage(response.msg);
        setIsLoading(false);
      } 
    }
  });


  

  
  return (
    <>
      <Helmet>
        <title>Forgot Password</title>
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
            
            {errorMessage && <Danger  message={errorMessage} />}
            {successMessage && <Success  message={successMessage} />}
              
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
                  helperText={formik.errors.email ? formik.errors.email : ""}
                  error={formik.errors.email ? true : false}
                />
                
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={isLoading}
                  sx={{ mt: 3, mb: 2 }}
                >
                  {isLoading ? 'Please wait...' : 'Submit'}
                </Button>
                <Link href="/admin/login" underline="hover">Back to Login?</Link>
              </Box>
              
            </Card>
          </Container>
        </Container>
      </MainContent>
    </>
  );
}

export default Forgotpassword;
