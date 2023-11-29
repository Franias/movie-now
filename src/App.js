/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import Main from './pages/Main/index';
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './routes';
function App() {
  return (
  <BrowserRouter>
    <MyRoutes />
  </BrowserRouter>
  );
}

export default App;
