import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import OrderModal from './OrderModal';


const MonitorDetails = () => {
  const { state } = useLocation();
  const { prescription } = state;
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-6">
        <h2 className="text-2xl font-bold mb-4">Medicine Guide for {prescription.name}</h2>
        <table className="table w-full bg-white shadow-lg rounded-lg">
          <thead>
            <tr>
              <th>Medicine Name</th>
              <th>Course Time</th>
              <th>Medicine Left</th>
              <th>Medicine Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{prescription.name}</td>
              <td>{prescription.courseTime}</td>
              <td>{prescription.left}</td>
              <td>{prescription.time}</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-4">
          <button className="btn btn-primary" onClick={() => setModalOpen(true)}>Order</button>
          <Link to="/dashboard" className="btn btn-secondary ml-2">Back to Dashboard</Link>
        </div>
        <OrderModal isOpen={modalOpen} closeModal={() => setModalOpen(false)} medicineName={prescription.name} />
      </div>
    </div>
  );
};

export default MonitorDetails;
