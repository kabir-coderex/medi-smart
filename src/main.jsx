import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login';
import Signup from './SignUp';
import Dashboard from './Dashboard';
import CreatePrescription from './CreatePrescription';
import SetInventory from './SetInventory';
import { PrescriptionProvider } from './context/PrescriptionContext';
import MonitorDetails from './components/MonitorDetails';


const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/create-prescription', element: <CreatePrescription /> },
  { path: '/set-inventory', element: <SetInventory /> },
  { path: '/monitor-details', element: <MonitorDetails /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrescriptionProvider>
      <RouterProvider router={router} />
    </PrescriptionProvider>
  </React.StrictMode>,
);