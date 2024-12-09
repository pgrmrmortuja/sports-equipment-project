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
import PrivateRoute from '../src/routes/PrivateRoute'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorPage from './Pages/ErrorPage';
import FAQ from './components/FAQ';
import AddEquipment from './components/AddEquipment';
import AllEquipments from './components/Equipments/AllEquipments';
import Details from './components/Equipments/Details';
import Update from './components/Equipments/Update';
import MyEquipments from './components/Equipments/MyEquipments';
import Categories from './components/Equipments/Categories';

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
        loader: () => fetch('https://coffee-store-server-me.vercel.app/equipments'),
      },
      {
        path: '/details/:id',
        element: <PrivateRoute>
          <Details></Details>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://coffee-store-server-me.vercel.app/equipments/${params.id}`),
      },
      {
        path: '/categories/:category',
        element: <PrivateRoute>
          <Categories></Categories>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://coffee-store-server-me.vercel.app/categories/${params.category}`),
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
        loader: ({ params }) => fetch(`https://coffee-store-server-me.vercel.app/equipments/${params.id}`),
      },
      

      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      
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
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>

  </StrictMode>,
)
