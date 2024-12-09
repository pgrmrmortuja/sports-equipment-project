import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layouts/MainLayout/MainLayout';
import HomeLayout from './layouts/HomeLayout/HomeLayout';
import AuthLayout from './layouts/AuthLayout/AuthLayout';
import AuthProvider from './providers/AuthProvider';
import Login from './Pages/Login';
import Register from './Pages/Register';
// import Details from './components/Services/Details';
import PrivateRoute from '../src/routes/PrivateRoute'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Profile from './Pages/Profile';
// import ForgotPassword from './Pages/ForgotPassword';
import ErrorPage from './Pages/ErrorPage';
// import Appointment from './components/Services/Appointment';
// import AppointmentProvider from './providers/AppointmentProvider';
import FAQ from './components/FAQ';
import AddEquipment from './components/AddEquipment';
import AllEquipments from './components/Equipments/AllEquipments';
import Details from './components/Equipments/Details';
import Update from './components/Equipments/Update';
import MyEquipments from './components/Equipments/MyEquipments';
import Categories from './components/Equipments/Categories';
// import AboutUs from './components/AboutUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,

      },
      {
        path: "/addEquipment",
        element: <PrivateRoute>
          <AddEquipment></AddEquipment>
        </PrivateRoute>,
      },
      {
        path: "/allEquipments",
        element: <AllEquipments></AllEquipments>,
        loader: () => fetch('http://localhost:5000/equipments'),
      },
      {
        path: '/details/:id',
        element: <PrivateRoute>
          <Details></Details>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/equipments/${params.id}`),
      },
      {
        path: '/categories/:category',
        element: <PrivateRoute>
          <Categories></Categories>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.category}`),
      },
      {
        path: '/myEquipments',
        element: <PrivateRoute>
          <MyEquipments></MyEquipments>
        </PrivateRoute>,
      },
      {
        path: 'update/:id',
        element: <PrivateRoute>
          <Update></Update>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/equipments/${params.id}`),
      },
      // {
      //   path: 'updateCoffee/:id',
      //   element: <UpdateCoffee></UpdateCoffee>,
      //   loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
      // },

      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/service/:serviceId",
        element: <PrivateRoute>
          {/* <Details></Details> */}
        </PrivateRoute>,

        loader: async () => {
          const response = await fetch("/service.json");
          return response.json();
        }
      },
      // {
      //   path: "/appointment",
      //   element: <Appointment></Appointment>,
      // },
      // {
      //   path: "/profile",
      //   element: <PrivateRoute>
      //     <Profile></Profile>
      //   </PrivateRoute>,
      // },

    ]
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
      // {
      //   path: "/auth/forgot-password",
      //   element: <ForgotPassword></ForgotPassword>,
      // },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>

      {/* <AppointmentProvider> */}
      <RouterProvider router={router} />
      <ToastContainer />
      {/* </AppointmentProvider> */}

    </AuthProvider>

  </StrictMode>,
)
