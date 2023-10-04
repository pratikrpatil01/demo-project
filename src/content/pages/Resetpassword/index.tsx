import {
  Box,
  Card,
  Typography,
  Container,
  Divider,
  Button,
  Checkbox,
  FormControlLabel,
  TextField
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { useFormik } from "formik";
import * as yup from 'yup';

import { styled } from '@mui/material/styles';

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
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      
      setTimeout(() => {
       
        resetForm();
      }, 1000 * 2);
    },
  });

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
