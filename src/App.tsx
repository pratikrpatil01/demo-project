import { useRoutes } from 'react-router-dom';
import router from 'src/router';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { ToastContainer } from 'react-toastify';
import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const content = useRoutes(router);

  return (
    <ThemeProvider>
      <ToastContainer theme="colored" />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />

        {content}
      </LocalizationProvider>
    </ThemeProvider>
  );
}
export default App;
