import React from 'react'
import ReactDOM from 'react-dom/client'
import MainPage from './MainPage'
import ShopPage from './ShopPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

const routes = createBrowserRouter([
  {
    path:'/',
    element: <MainPage />,
    children: [
      {
        path:'/',
        element: <ShopPage/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
