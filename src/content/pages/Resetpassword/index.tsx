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
import { useFormik } from "formik";
import * as yup from 'yup';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { styled } from '@mui/material/styles';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import ApiServices from 'src/Network_call/apiservices';
import ApiEndPoints from 'src/Network_call/ApiEndPoints';

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

const handleSubmit = () => {
  console.log('Form is submitted.');
};
function Resetpassword() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validateSchema = yup.object().shape({
    otp: yup.string().required("The otp field is required"),
    password: yup.string()
    .required("This field is required")
    .min(8, "Pasword must be 8 or more characters")
    .matches(/(?=.*[a-z])(?=.*[A-Z])\w+/, "Password ahould contain at least one uppercase and lowercase character")
    .matches(/\d/, "Password should contain at least one number")
    .matches(/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/, "Password should contain at least one special character"),
    confirmPassword: yup.string().when("password", (password, field) => {
      if (password) {
        return field.required("The passwords do not match").oneOf([yup.ref("password")], "The passwords do not match");
      }
    }),
    
  });

  const formik = useFormik({
    initialValues: {
      otp: "",
      password: "",
      confirmPassword:"",
    },
    validationSchema: validateSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log(ApiEndPoints)
      const responce = await ApiServices('post', ApiEndPoints.ResetPassword, values);
      console.log('responce')
      console.log(responce)
      if (responce.success) {
        showSuccess(responce.msg);
        setTimeout(() => {
          navigate('admin/login');
        }, 3000);
        
        resetForm();
  
      }else{
        showError(responce.msg);
      } 
    }
  });

  const [errorMessage, setErrorMessage] =  React.useState('');
  const [successMessage, setSuccessMessage] =  React.useState('We have sent an otp on your email');

  // Function to show an error message
  const showError = (message) => {
    setErrorMessage(message);
  };

  // Function to hide the error message
  const hideError = () => {
    setErrorMessage('');
  };
  // Function to show an success message
  const showSuccess = (message) => {
    setSuccessMessage(message);
  };

  // Function to hide the success message
  const hideSuccess = () => {
    setSuccessMessage('');
  };

  return (
    <>
      <Helmet>
        <title>Reset Password</title>
      </Helmet>
      <MainContent>
        <Container maxWidth="md">
          <Box textAlign="center">
            {/* <img alt="404" height={180} src="/static/images/status/404.svg" /> */}
            <Typography variant="h2" sx={{ my: 2 }}>
            Reset Password
            </Typography>
          </Box>
          <Container maxWidth="sm">
            <Card sx={{ textAlign: 'center', mt: 3, p: 4 }}>
            {errorMessage && (
              <Card className="error-message" sx={{  padding: '10px',borderRadius:'6px',  backgroundColor:'red', position: 'relative'}}>
                
                  <button style={{  position: 'absolute',top:'5px',right:'5px','background':'none',border:'none',cursor:'pointer',fontSize:'20px' }} onClick={hideError} >
                    <CloseSharpIcon /> {/* Font Awesome close icon */}
                  </button>
                  <span style={{paddingRight: '30px'}}>{errorMessage}</span>
              </Card>
            )}
            {successMessage && (
              <Card className="error-message" sx={{  padding: '10px',borderRadius:'6px',  backgroundColor:'green', position: 'relative'}}>
                
                  <button style={{  position: 'absolute',top:'5px',right:'5px','background':'none',border:'none',cursor:'pointer',fontSize:'20px' }} onClick={hideSuccess} >
                    <CloseSharpIcon /> {/* Font Awesome close icon */}
                  </button>
                  <span style={{paddingRight: '30px'}}>{successMessage}</span>
              </Card>
            )}
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
                  id="otp"
                  label="OTP"
                  name="otp"
                  autoComplete="otp"
                  autoFocus
                  onChange={formik.handleChange}
                  value={formik.values.otp}
                  helperText={formik.errors.otp ? formik.errors.otp : ""}
                  error={formik.errors.otp ? true : false}
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
                  helperText={formik.errors.password ? formik.errors.password : ""}
                  error={formik.errors.password ? true : false}
                />
                
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="confirm-password"
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                  helperText={formik.errors.confirmPassword ? formik.errors.confirmPassword : ""}
                  error={formik.errors.confirmPassword ? true : false}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              </Box>
              
            </Card>
          </Container>
        </Container>
      </MainContent>
    </>
  );
}

export default Resetpassword;
