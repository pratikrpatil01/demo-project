import React from 'react';
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  MenuItem,
  TextField,
  Typography
} from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import Footer from 'src/components/Footer';
import { useFormik } from 'formik';
import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import ProductHeader from './Header';
import { dispatch } from 'src/store';
import { UploadFile, getType } from 'src/store/reducers/commanReducer';
import { AddProduct } from 'src/store/reducers/product';
import { GetManufacturerDetails } from 'src/store/reducers/manufacturer';

interface dropdownState {
  BatchesFrequently?: string[];
  DosageForm?: string[];
}

interface uploadImg {
  COA?: string;
  art_work?: string;
  COPP?: string;
  dossier?: string;
}

const AddProducts = () => {
  const { id } = useParams();

  const [dropdownValue, setDropdownValue] = React.useState<dropdownState>({
    BatchesFrequently: [],
    DosageForm: []
  });
  const [uploadImage, setUploadeImage] = React.useState<uploadImg>();

  const handleSubmit = (props: any) => {};
  const getDropdownValue = async (type: any) => {
    const responce = await dispatch(getType(type));
    setDropdownValue((prev) => ({
      ...prev,
      [type.type]: responce?.payload
    }));
  };

  const navigate = useNavigate();

  const UploadImage = async (e: any) => {
    const { files, name } = e.target;
    const payload = { file: files[0] };

    const responce = await dispatch(UploadFile(payload));

    setUploadeImage((prev) => ({ ...prev, [name]: responce?.payload }));
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const payload = { manufacturer_id: id, ...values, ...uploadImage };
      await dispatch(AddProduct(payload));

      await dispatch(GetManufacturerDetails({ manufacture_id: id }));
      navigate(`/admin/manufacturers/details/${id}`);
      resetForm();
    }
  });
  return (
    <React.Fragment>
      <>
        <Helmet>
          <title>Add Product</title>
        </Helmet>
        {/* <PageTitleWrapper>
          <ProductHeader title="Add Products" />
        </PageTitleWrapper> */}

        <Container style={{ height: '100%' }} maxWidth={false}>
          <Card style={{ padding: '25px' }}>
            <Typography variant="h3" component="h3" gutterBottom>
              Add Product
            </Typography>
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <Grid
                container
                direction="row"
                justifyContent="start"
                alignItems="stretch"
                spacing={3}
              >
                <Grid item xs={4}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="products_name"
                    label="Enter Product Name"
                    name="products_name"
                    autoComplete="products_name"
                    onChange={formik.handleChange}
                    value={formik.values.products_name}
                    helperText={
                      formik.errors.products_name
                        ? formik.errors.products_name
                        : ''
                    }
                    error={formik.errors.products_name ? true : false}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="strength"
                    label="Enter strength"
                    id="strength"
                    autoComplete="Enter strength"
                    onChange={formik.handleChange}
                    value={formik.values.strength}
                    helperText={
                      formik.errors.strength ? formik.errors.strength : ''
                    }
                    error={formik.errors.strength ? true : false}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    select
                    name="dosage_forms"
                    label="Enter Dosage form"
                    id="dosage_forms"
                    defaultValue="Select Batches Frequently"
                    autoComplete="Enter Batches Frequently"
                    onChange={formik.handleChange}
                    value={formik.values.dosage_forms}
                    onFocus={() => getDropdownValue({ type: 'DosageForm' })}
                    helperText={
                      formik.errors.dosage_forms
                        ? formik.errors.dosage_forms
                        : ''
                    }
                    error={formik.errors.dosage_forms ? true : false}
                  >
                    {options.dosage_forms?.map((value, index) => (
                      <MenuItem key={index} value={value}>
                        {value}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    style={{ borderColor: 'gray' }}
                    margin="normal"
                    required
                    fullWidth
                    name="packing"
                    label="packing Document"
                    id="packing"
                    // focused
                    onChange={formik.handleChange}
                    value={formik.values.packing}
                    helperText={
                      formik.errors.packing ? formik.errors.packing : ''
                    }
                    error={formik.errors.packing ? true : false}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    style={{ borderColor: 'gray' }}
                    margin="normal"
                    required
                    fullWidth
                    name="dossier"
                    label="dossier Document"
                    type="file"
                    id="dossier"
                    onChange={UploadImage}
                    value={formik.values.dossier}
                    helperText={
                      formik.errors.dossier ? formik.errors.dossier : ''
                    }
                    error={formik.errors.dossier ? true : false}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    margin="normal"
                    // id=""
                    required
                    fullWidth
                    select
                    label="Select List of countries"
                    name="list_of_countries"
                    defaultValue="Select"
                    onChange={formik.handleChange}
                    value={formik.values.list_of_countries}
                    helperText={
                      formik.errors.list_of_countries
                        ? formik.errors.list_of_countries
                        : ''
                    }
                    error={formik.errors.list_of_countries ? true : false}
                  >
                    {options.list_of_countries?.map((value, index) => (
                      <MenuItem key={index} value={value}>
                        {value}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    style={{ borderColor: 'gray' }}
                    margin="normal"
                    required
                    fullWidth
                    name="COA"
                    label="COA Document"
                    type="file"
                    id="COA"
                    autoComplete="COA Document"
                    focused
                    onChange={UploadImage}
                    value={formik.values.COA}
                    helperText={formik.errors.COA ? formik.errors.COA : ''}
                    error={formik.errors.COA ? true : false}
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    style={{ borderColor: 'gray' }}
                    margin="normal"
                    required
                    fullWidth
                    name="COPP"
                    label="COPP Document"
                    type="file"
                    id="COPP"
                    autoComplete="COPP Document"
                    focused
                    onChange={UploadImage}
                    value={formik.values.COPP}
                    helperText={formik.errors.COPP ? formik.errors.COPP : ''}
                    error={formik.errors.COPP ? true : false}
                  />
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="api_dmf"
                    label="Enter API DMF"
                    id="api_dmf"
                    autoComplete="Enter api_dmf"
                    onChange={formik.handleChange}
                    value={formik.values.api_dmf}
                    helperText={
                      formik.errors.api_dmf ? formik.errors.api_dmf : ''
                    }
                    error={formik.errors.api_dmf ? true : false}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    style={{ borderColor: 'gray' }}
                    margin="normal"
                    required
                    fullWidth
                    name="Art_work"
                    label="Art work Document"
                    type="file"
                    id="Art_work"
                    autoComplete=" Art_work Document"
                    focused
                    onChange={UploadImage}
                    value={formik.values.Art_work}
                    helperText={
                      formik.errors.Art_work ? formik.errors.Art_work : ''
                    }
                    error={formik.errors.Art_work ? true : false}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="pack_size"
                    label="Enter Pack Size"
                    name="pack_size"
                    autoComplete="pack_size"
                    onChange={formik.handleChange}
                    value={formik.values.pack_size}
                    helperText={
                      formik.errors.pack_size ? formik.errors.pack_size : ''
                    }
                    error={formik.errors.pack_size ? true : false}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="ba_be_studies"
                    label="Enter BA BE Studies"
                    name="ba_be_studies"
                    autoComplete=" ba_be_studies"
                    onChange={formik.handleChange}
                    value={formik.values.ba_be_studies}
                    helperText={
                      formik.errors.ba_be_studies
                        ? formik.errors.ba_be_studies
                        : ''
                    }
                    error={formik.errors.ba_be_studies ? true : false}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="category"
                    label="Enter category"
                    name="category"
                    autoComplete="category"
                    onChange={formik.handleChange}
                    value={formik.values.category}
                    helperText={
                      formik.errors.category ? formik.errors.category : ''
                    }
                    error={formik.errors.category ? true : false}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="moq"
                    label="Enter moq"
                    name="moq"
                    autoComplete="moq"
                    onChange={formik.handleChange}
                    value={formik.values.moq}
                    helperText={formik.errors.moq ? formik.errors.moq : ''}
                    error={formik.errors.moq ? true : false}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    margin="normal"
                    id="batches_frequently"
                    required
                    fullWidth
                    select
                    label="Select Batches Frequently"
                    name="batches_frequently"
                    defaultValue="Select"
                    onChange={formik.handleChange}
                    value={formik.values.batches_frequently}
                    onFocus={() =>
                      getDropdownValue({ type: 'BatchesFrequently' })
                    }
                    helperText={
                      formik.errors.batches_frequently
                        ? formik.errors.batches_frequently
                        : ''
                    }
                    error={formik.errors.batches_frequently ? true : false}
                  >
                    {options.batches_frequently?.map((value, index) => (
                      <MenuItem key={index} value={value}>
                        {value}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>

                <Grid item xs={4}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="shipper_pack_size"
                    label="Enter Shipper pack size"
                    name="shipper_pack_size"
                    autoComplete="shipper_pack_size"
                    onChange={formik.handleChange}
                    value={formik.values.shipper_pack_size}
                    helperText={
                      formik.errors.shipper_pack_size
                        ? formik.errors.shipper_pack_size
                        : ''
                    }
                    error={formik.errors.shipper_pack_size ? true : false}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="tentative_rates"
                    label="Enter Tentative Rates"
                    name="tentative_rates"
                    autoComplete=" tentative_rates"
                    onChange={formik.handleChange}
                    value={formik.values.tentative_rates}
                    helperText={
                      formik.errors.tentative_rates
                        ? formik.errors.tentative_rates
                        : ''
                    }
                    error={formik.errors.tentative_rates ? true : false}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="lead_time"
                    label="Enter Lead Time"
                    name="lead_time"
                    autoComplete="lead_time"
                    onChange={formik.handleChange}
                    value={formik.values.lead_time}
                    helperText={
                      formik.errors.lead_time ? formik.errors.lead_time : ''
                    }
                    error={formik.errors.lead_time ? true : false}
                  />
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="brand_name"
                    label="Enter Brand Name"
                    name="brand_name"
                    autoComplete="brand_name"
                    onChange={formik.handleChange}
                    value={formik.values.brand_name}
                    helperText={
                      formik.errors.brand_name ? formik.errors.brand_name : ''
                    }
                    error={formik.errors.brand_name ? true : false}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} style={{ marginTop: '5px' }}>
                <Grid item>
                  <Button variant="contained" color="primary" type="submit">
                    Submit
                  </Button>
                </Grid>
                <Grid item>
                  <Link to={`/admin/manufacturers/details/${id}`}>
                    <Button
                      variant="contained"
                      color="secondary"
                      component="a"
                      // href={`/admin/manufacturers/details/${id}`}
                    >
                      Cancel
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Container>

        {/* <Footer /> */}
      </>
    </React.Fragment>
  );
};

export default AddProducts;
const options = {
  dosage_forms: ['Tablet', 'Capsule', 'Syrup', 'Injection'],
  list_of_countries: ['India', 'USA', 'UK', 'Japan'],
  batches_frequently: ['Dailly', 'Weekly', 'Monthly']
};

const inputFind = [
  { name: 'products_name', label: 'Product Name ', type: 'text' },
  { name: 'strength', label: 'strength', type: 'text' },
  {
    name: 'dosage_forms',
    label: ' Dosage form',
    type: 'select',
    options: options.dosage_forms
  },
  { name: 'packing', label: 'packing', type: 'text' },
  { name: 'dossier', label: 'dossier', type: 'file' },
  {
    name: 'list_of_countries',
    label: 'List of countries',
    type: 'select',
    options: options.list_of_countries
  },
  { name: 'COA', label: 'COA', type: 'file' },
  { name: 'COPP', label: 'COPP', type: 'file' },
  { name: 'api_dmf', label: 'API DMF', type: 'text' },
  { name: 'Art_work', label: 'Art work', type: 'file' },
  { name: 'pack_size', label: 'Pack Size', type: 'text' },
  { name: 'BA-BE_Studies', label: 'BA-BE Studies', type: 'text' },
  { name: 'category', label: 'category', type: 'text' },
  { name: 'moq', label: 'moq', type: 'text' },
  {
    name: 'batches_frequently',
    label: 'Batches Frequently',
    type: 'select',
    options: options.batches_frequently
  },
  { name: 'shipper_pack_size', label: 'Shipper pack size', type: 'text' },
  { name: 'tentative_rates', label: 'Tentative Rates', type: 'text' },
  { name: 'lead_time', label: 'Lead Time', type: 'text' },
  { name: 'brand_name', label: 'Brand Name', type: 'text' }
];

const initialValues = {
  products_name: '',
  strength: '',
  dosage_forms: '',
  packing: '',
  dossier: '',
  list_of_countries: '',
  COA: '',
  COPP: '',
  api_dmf: '',
  Art_work: '',
  pack_size: '',
  category: '',
  ba_be_studies: '',
  moq: '',
  batches_frequently: '',
  shipper_pack_size: '',
  tentative_rates: '',
  lead_time: '',
  brand_name: ''
};
const validationSchema = Yup.object().shape({
  products_name: Yup.string().required('Product Name is required'),
  strength: Yup.string().required('strength is required'),
  dosage_forms: Yup.string().max(255).required(' Dosage form is required'),
  packing: Yup.string().max(255).required('packing is required'),
  // dossier: Yup.string().max(255).required('dossier is required'),
  list_of_countries: Yup.string()
    .max(255)
    .required(' List of countries is required'),
  // COA: Yup.string().max(255).required('COA is required'),
  // COPP: Yup.string().max(255).required('COPP is required'),
  api_dmf: Yup.string().max(255).required('API DMF is required'),
  // Art_work: Yup.mixed().max(255).required(' Art work type is required'),

  pack_size: Yup.string().max(255).required('Pack Size is required'),
  category: Yup.string().max(255).required('category is required'),
  ba_be_studies: Yup.string().max(255).required('BA-BE Studies is required'),
  moq: Yup.string().max(255).required('moq is required'),
  batches_frequently: Yup.string()
    .max(255)
    .required(' Batches Frequently is required'),
  shipper_pack_size: Yup.string()
    .max(255)
    .required('Shipper pack size is required'),
  tentative_rates: Yup.string()
    .max(255)
    .required('Tentative Rates is required'),
  lead_time: Yup.string().max(255).required('Lead Time is required'),
  brand_name: Yup.string().max(255).required('Brand Name is required')
});
