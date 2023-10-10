import { Backdrop, CircularProgress } from '@mui/material';
import React from 'react';

const Loader = ({ open = false }) => {
  return (
    <React.Fragment>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </React.Fragment>
  );
};

export default Loader;
