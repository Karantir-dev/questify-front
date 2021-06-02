import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import entireStore from './Redux/store';

import './index.css';
// import { PersistGate } from 'redux-persist/integration/react';

import Modal from './Components/Modal/Modal';
import TestCard from './Components/Modal/TestCard';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={entireStore.store}>
      {/* <PersistGate loading={null} persistor={entireStore.persistor}> */}
      <BrowserRouter>
        <App />
        <TestCard>
          <Modal cardType='Quest'/>
        </TestCard>
        
      </BrowserRouter>
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
