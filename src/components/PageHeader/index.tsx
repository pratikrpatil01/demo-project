import { Typography, Button, Grid } from '@mui/material';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

function PageHeader({ actionText, title, subTitle, handleClick }) {
  const user = {
    name: 'Catherine Pike',
    avatar: '/static/images/avatars/1.jpg'
  };
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle2">{subTitle}</Typography>
      </Grid>
      <Grid item>
        <Grid></Grid>
        <Button
          // href={`${handleCkick}`}
          onClick={handleClick}
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
        >
          {actionText}
        </Button>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
