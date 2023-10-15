import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import PageTitle from 'src/components/PageTitle';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Divider,
  TextField,
  Box,
  MenuItem
} from '@mui/material';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import Footer from 'src/components/Footer';
import { useFormik } from 'formik';

import * as yup from 'yup';
import { AddContentType, EditContentType } from 'src/store/reducers/master';
// import { useDispatch } from 'react-redux';
// import { dispatch } from 'src/store';
import { dispatch } from 'src/store';
import { log } from 'console';
import { isAsyncFunction } from 'util/types';

const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItem
            button
            onClick={() => handleListItemClick(email)}
            key={email}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}

        <ListItem
          autoFocus
          button
          onClick={() => handleListItemClick('addAccount')}
        >
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Add account" />
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired
};

function Modals() {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <>
      <Helmet>
        <title>Modals - Components</title>
      </Helmet>
      <PageTitleWrapper>
        <PageTitle
          heading="Modals"
          subHeading="Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks."
          docs="https://material-ui.com/components/dialogs/"
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
              <CardHeader title="Basic Dialog" />
              <Divider />
              <CardContent>
                <Typography variant="subtitle1" component="div">
                  Selected: {selectedValue}
                </Typography>
                <br />
                <Button variant="outlined" onClick={handleClickOpen}>
                  Open simple dialog
                </Button>
                <SimpleDialog
                  selectedValue={selectedValue}
                  open={open}
                  onClose={handleClose}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Modals;

export const AddtypeModal = ({ handleClose, open }) => {
  // const dispatch = useDispatch();

  const ContentTypeConst = {
    Activity: 'Activity',
    ManufacturerLicense: 'Manufacturing License',
    Personel: 'Personel',
    Equipment: 'Equipment',
    TypesofProduct: 'Types of Product',
    Section: 'Sections - Dosage forms approved',
    IndianGmpStatus: 'Indian Gmp Status',
    NonPharmaActivities: 'Non Pharma Activities',
    InternationalGmpStatus: 'InternationalGmpStatus',
    DosageForm: 'Dosage Form',
    BatchesFrequently: 'Batches Frequently'
  };

  const validateSchema = yup.object().shape({
    type: yup.string().required('The type field is required'),
    title: yup.string().required('The title field is required')
  });

  const formik = useFormik({
    initialValues: {
      type: '',
      title: ''
    },
    validationSchema: validateSchema,
    onSubmit: (values, { resetForm }) => {
      //
      dispatch(AddContentType(values));
      resetForm();
      handleClose();
    }
  });

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle fontSize={'20px'}> Add New Type</DialogTitle>
      <Card>
        {/* <CardHeader>Add Type</CardHeader> */}
        <CardContent>
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
              id="Title"
              label="Title"
              name="title"
              autoFocus
              onChange={formik.handleChange}
              value={formik.values.title}
              helperText={formik.errors.title ? formik.errors.title : ''}
              error={formik.errors.title ? true : false}
            />

            <TextField
              margin="normal"
              id="type"
              required
              fullWidth
              select
              label="Select Type "
              name="type"
              defaultValue="Select"
              onChange={formik.handleChange}
              value={formik.values.type}
              helperText={formik.errors.type ? formik.errors.type : ''}
              error={formik.errors.type ? true : false}
            >
              {ContentTypeConst &&
                Object.keys(ContentTypeConst).map(
                  (activitiesTemp: any, index: any) => (
                    <MenuItem key={index} value={activitiesTemp}>
                      {ContentTypeConst[activitiesTemp]}
                    </MenuItem>
                  )
                )}
            </TextField>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Dialog>
  );
};

AddtypeModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.any.isRequired
};
export const EdittypeModal = ({ data, handleClose, open }) => {
  const [title, setTitle] = React.useState(data?.title);

  const onSubmit = async () => {
    await dispatch(
      EditContentType({
        id: data?._id,
        data: {
          title: title
        }
      })
    );

    handleClose();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle fontSize={'20px'}> Add New Type</DialogTitle>
      <Card>
        {/* <CardHeader>Add Type</CardHeader> */}
        <CardContent>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Title"
              label="Title"
              name="title"
              autoFocus
              onChange={(e: any) => setTitle(e.target.value)}
              value={title}
              helperText={!title ? 'The title field is required' : ''}
              error={!title ? true : false}
            />

            <Button
              onClick={onSubmit}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Dialog>
  );
};

EdittypeModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.any.isRequired,
  data: PropTypes.any.isRequired,
  initialState: PropTypes.any.isRequired
};
