import React from 'react';
import { AppBody, Main } from './components/styled/Global';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AppBody>
      <ToastContainer />
      <Main>
        <Routes />
      </Main>
    </AppBody>
  );
}

export default App;
