import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';


export const Warning = ({ message  }) => {
  const [open, setOpen] = useState(true);
  
  useEffect(() => {
   
      setOpen(true);
  },[open]);


  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Collapse in={open}>
          <Alert
          severity="warning"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                  
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            {message}
          </Alert>
        </Collapse>
        
      </Box>
    </>
  );
};

export const Success = ({ message }) => {
  const [open, setOpen] = useState(true);
  
  useEffect(() => {
   
      setOpen(true);
  },[open]);

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Collapse in={open}>
          <Alert
          severity="success"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            {message}
          </Alert>
        </Collapse>
      </Box>
    </>
  );
};

export const Danger = ({ message }) => {
  const [open, setOpen] = useState(true);
  
  useEffect(() => {
   
      setOpen(true);
  },[open]);

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Collapse in={open}>
          <Alert
          severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            {message}
          </Alert>
        </Collapse>
      </Box>
    </>
  );
};
