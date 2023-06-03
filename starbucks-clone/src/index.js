import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import Menu from './Pages/Menu/Menu';
import Merchandise from './Pages/Merchandise/Merchandise';
import Rewards from './Pages/Rewards/Rewards';

// Footer
import Company from './FooterPages/Company/Company'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/menu',
    element: <Menu />,
  },
  {
    path: '/merchandise',
    element: <Merchandise />,
  },
  {
    path: '/rewards',
    element: <Rewards />,
  },
  {
    path: '/company',
    element: <Company />,
  },


  {
    path: '*',
    element: <App />,
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
