import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PrescriptionContext } from './context/PrescriptionContext';

const SetInventory = () => {
  const { prescriptions, updatePrescriptionLeft } = useContext(PrescriptionContext);
  const [inventory, setInventory] = useState(
    prescriptions.map((prescription) => ({ name: prescription.name, quantity: '' }))
  );
  const navigate = useNavigate();

  const handleInputChange = (index, value) => {
    const newInventory = [...inventory];
    newInventory[index].quantity = parseInt(value, 10) || '';
    setInventory(newInventory);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    inventory.forEach((item) => {
      if (item.quantity) {
        updatePrescriptionLeft(item.name, item.quantity);
      }
    });
    navigate('/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center">Set Inventory</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <table className="table w-full bg-white shadow-lg rounded-lg">
            <thead>
              <tr>
                <th>Medicine Name</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>
                    <input
                      type="number"
                      className="input input-bordered w-full"
                      value={item.quantity}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      required
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="submit" className="btn btn-primary w-full">Set Inventory</button>
        </form>
      </div>
    </div>
  );
};

export default SetInventory;
