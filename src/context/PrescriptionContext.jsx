import React, { createContext, useState } from 'react';

export const PrescriptionContext = createContext();

export const PrescriptionProvider = ({ children }) => {
  const [prescriptions, setPrescriptions] = useState([
    { name: 'Medicine A', courseTime: '10 days', left: 5, time: '8 AM, 8 PM' },
    { name: 'Medicine B', courseTime: '7 days', left: 2, time: '9 AM' },
    { name: 'Medicine C', courseTime: '5 days', left: 3, time: '10 AM' },
  ]);

  const updatePrescriptionLeft = (name, quantity) => {
    setPrescriptions((prevPrescriptions) =>
      prevPrescriptions.map((prescription) =>
        prescription.name === name
          ? { ...prescription, left: prescription.left + quantity }
          : prescription
      )
    );
  };

  return (
    <PrescriptionContext.Provider value={{ prescriptions, updatePrescriptionLeft }}>
      {children}
    </PrescriptionContext.Provider>
  );
};
