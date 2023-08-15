import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './MainPage'
import ShopPage from './ShopPage'
import OrderPage from './OrderPage'
import cartProductsLoader from './components/loaders/cartProductsLoader'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

const routes = createBrowserRouter([
  {
    path:'/',
    element: <MainPage />,
    children: [
      {
        path:'/',
        element: <ShopPage/>,
        loader: cartProductsLoader
      },
      {
        path: 'order-summary',
        element: <OrderPage />,
        loader:cartProductsLoader
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
