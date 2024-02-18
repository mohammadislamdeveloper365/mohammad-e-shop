import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from './components/MainPage';
import Layout from './components/Layout';
import LoginPage from './components/LoginPage';
import OrderPage from './components/OrderPage';
import InventoryPage from './components/InventoryPage';

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <LoginPage />
      },
      {
        path: 'home',
        element: <MainPage />
      },
      {
        path: 'order',
        element: <OrderPage />
      },
      {
        path: 'inventory',
        element: <InventoryPage />
      }
    ]
  }
]);
root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);

