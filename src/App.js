import React from "react";
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from "react-router-dom";
import { Provider } from 'react-redux';

import "./config/ReactotronConfig";

import Routes from "./routes";
import history from "./services/history";

import { store, persistor } from './store';

import GlobalStyle from "./styles/global";

function App() {
  return (
    <Provider store={store} >
      <PersistGate persistor={persistor} >
      <Router history={history}>
          <Routes />
          <GlobalStyle />
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
            draggable
            pauseOnHover
            />
        </Router>
      </PersistGate>
    </Provider>
    
  );
}

export default App;
