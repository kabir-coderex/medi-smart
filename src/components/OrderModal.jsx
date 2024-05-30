import React, { useState } from 'react';
import { useToaster } from 'react-hot-toast';

const OrderModal = ({ isOpen, closeModal, medicineName }) => {
  const [quantity, setQuantity] = useState(1);
  const [showOrderSection, setShowOrderSection] = useState(false);
  const [selectedPharmacy, setSelectedPharmacy] = useState(null);
  const toaster = useToaster();

  const pharmacies = [
    { id: 1, name: 'Pharmacy A', address: '123 Main St', phone: '123-456-7890' },
    { id: 2, name: 'Pharmacy B', address: '456 Elm St', phone: '456-789-0123' },
    // Add more pharmacies as needed
  ];

  const handleOrderClick = () => {
    // Send order request here
    closeModal();
    toaster.success('Order placed successfully!');
  };

  const calculateTotalCost = () => {
    // Assuming each unit of medicine costs $10
    return quantity * 10;
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-white p-6 rounded-lg shadow-lg w-2/3">
        {!showOrderSection ? (
          <>
            <h2 className="text-xl font-bold mb-4">Order Medicine</h2>
            <div className="mb-4">
              <input type="text" placeholder="Search pharmacies..." className="input input-bordered w-full" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Favorite Pharmacies</h3>
              <div className="grid grid-cols-1 gap-4">
                {pharmacies.map((pharmacy) => (
                  <div
                    key={pharmacy.id}
                    className="p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-100"
                    onClick={() => setSelectedPharmacy(pharmacy)}
                  >
                    <h4 className="font-semibold">{pharmacy.name}</h4>
                    <p>{pharmacy.address}</p>
                    <p>{pharmacy.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-xl font-bold mb-4">Order Medicine</h2>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">{medicineName}</h3>
              <p>Quantity:</p>
              <input
                type="number"
                className="input input-bordered w-1/4"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <p>Total Cost: ${calculateTotalCost()}</p>
            </div>
          </>
        )}
        <div className="flex justify-between">
          <button className="btn btn-primary" onClick={showOrderSection ? handleOrderClick : () => setShowOrderSection(true)}>
            {showOrderSection ? 'Order' : 'Next'}
          </button>
          <button className="btn btn-secondary" onClick={showOrderSection ? () => setShowOrderSection(false) : closeModal}>
            {showOrderSection ? 'Back' : 'Cancel'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
