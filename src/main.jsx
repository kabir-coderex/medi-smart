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
  { path: '/', element: <Login /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: 'https://665852236690d5e351cfb9db--splendorous-nasturtium-c39481.netlify.app/dashboard', element: <Dashboard /> },
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
