import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './Layout/Root';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import AllProvider from './AllProvider/AllProvider';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AllProvider>
      <RouterProvider router={router}>
        <Root></Root>
      </RouterProvider>
    </AllProvider>
  </React.StrictMode>
);
