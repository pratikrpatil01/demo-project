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
import { useFormik } from 'formik';
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
function Login() {
  const validateSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter a valid email')
      .required('The email field is required'),
    password: yup.string().required('The password field is required')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validateSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);

      setTimeout(() => {
        resetForm();
      }, 1000 * 2);
    }
  });

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <MainContent>
        <Container maxWidth="md">
          <Box textAlign="center">
            {/* <img alt="404" height={180} src="/static/images/status/404.svg" /> */}
            <Typography variant="h2" sx={{ my: 2 }}>
              Login
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
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  helperText={formik.errors.email ? formik.errors.email : ''}
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
                <a href='/admin/forgot-password' >Forgot Password</a>
              </Box>
              
            </Card>
          </Container>
        </Container>
      </MainContent>
    </>
  );
}

export default Login;
