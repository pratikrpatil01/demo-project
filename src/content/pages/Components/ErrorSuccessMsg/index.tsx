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
import CloseSharpIcon from '@mui/icons-material/CloseSharp';

const ErrorSuccessMsg = ({onClose, message = '', success = true}) => {

    return (
        <>
            {(message) && (
              <Card className="error-message" sx={{  padding: '10px',borderRadius:'6px',  backgroundColor:!success?'red':'green', position: 'relative'}}>
                
                  <button style={{  position: 'absolute',top:'5px',right:'5px','background':'none',border:'none',cursor:'pointer',fontSize:'20px' }} onClick={onClose} >
                    <CloseSharpIcon /> {/* Font Awesome close icon */}
                  </button>
                  <span style={{paddingRight: '30px'}}>{message}</span>
              </Card>
            )}
    
        </>
    )
}
export default ErrorSuccessMsg;