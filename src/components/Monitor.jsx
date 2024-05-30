import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PrescriptionContext } from '../context/PrescriptionContext';

const Monitor = () => {
  const { prescriptions } = useContext(PrescriptionContext);
  const navigate = useNavigate();

  const getCardColor = (daysLeft) => {
    if (daysLeft <= 2) return 'bg-red-500';
    if (daysLeft === 3) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const handleCardClick = (prescription) => {
    navigate('/monitor-details', { state: { prescription } });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-6">
        <h2 className="text-2xl  font-bold mb-4">Monitor</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {prescriptions.map((prescription, index) => (
            <div
              key={index}
              className={`card ${getCardColor(prescription.left)} p-4 rounded-lg shadow-lg cursor-pointer`}
              onClick={() => handleCardClick(prescription)}
            >
              <img src={`https://via.placeholder.com/150`} alt="User" className="w-16 h-16 rounded-full mb-4" />
              <h3 className="text-lg text-white font-bold">{prescription.name}</h3>
              <p className="text-white">Medicine Left: {prescription.left} days</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Monitor;
