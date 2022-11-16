import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
// } from "react-router-dom";
import './index.css'

// const router = createBrowserRouter([
//   {
//     path: "/personajes",
//     element: <div>Hello world!</div>,
//   },
// ]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
)
