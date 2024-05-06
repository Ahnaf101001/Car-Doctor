import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Pages/Root';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import AuthProvider from './providers/AuthProvider';
import BookService from './Pages/BookService';
import PrivateRoute from './Routes/PrivateRoute';
import Bookings from './Pages/Bookings';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>,
      },
      {
        path: 'book/:id',
        element: <PrivateRoute><BookService></BookService></PrivateRoute>,
        loader: ({ params }) => fetch(`https://car-doctor-server-rust-chi.vercel.app/services/${params.id}`)
      },
      {
        path: 'bookings',
        element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
