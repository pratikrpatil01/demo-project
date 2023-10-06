import { Typography, Button, Grid } from '@mui/material';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

function PageHeader() {
  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg'
  };
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Manufacturers
        </Typography>
        <Typography variant="subtitle2">
          {user.name}, these are your recent Manufacturers
        </Typography>
      </Grid>
      <Grid item>
        <Button
          href="manufacturers/add"
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
        >
          Add New Manufacturer
        </Button>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
