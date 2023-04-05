import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "redux/store";
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from '@mui/material';
import { theme } from 'theme/theme';
import { SnackbarProvider } from 'notistack';
import { StyledComponents } from 'service/alertOptions';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter
          basename="/goit-react-hw-08-phonebook"
        >
          <PersistGate loading={null} persistor={persistor}>
            <SnackbarProvider Components={StyledComponents}>
              <App />
            </SnackbarProvider>
          </PersistGate>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
