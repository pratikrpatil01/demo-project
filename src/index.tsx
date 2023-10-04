import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import 'nprogress/nprogress.css';
import App from 'src/App';
import { store, persister } from 'src/store';
import { SidebarProvider } from 'src/contexts/SidebarContext';
import * as serviceWorker from 'src/serviceWorker';

ReactDOM.render(
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persister}>
      <HelmetProvider>
        <SidebarProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SidebarProvider>
      </HelmetProvider>
    </PersistGate>
  </ReduxProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
