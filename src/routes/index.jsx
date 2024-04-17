// import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from '../Layout';
import Home from '../pages/Home';

import Products from '../pages/Products';
import ErrorPage from '../pages/ErrorPage';
import ProductDetail from '../pages/ProductDetail';
import Login from '../pages/Login';

const Routers = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          path: '/',
          element: <Home />,
        },
        {
          path: '/products',
          element: <Products />,
        },
        {
          path: '/products/:id',
          element: <ProductDetail />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routers;
