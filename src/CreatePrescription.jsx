import React from 'react';

const CreatePrescription = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center">Create Prescription</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="medicineName" className="block text-sm font-medium text-gray-700">Medicine Name</label>
            <input type="text" id="medicineName" className="input input-bordered w-full mt-1" required />
          </div>
          <div>
            <label htmlFor="courseTime" className="block text-sm font-medium text-gray-700">Course Time</label>
            <input type="text" id="courseTime" className="input input-bordered w-full mt-1" required />
          </div>
          <div>
            <label htmlFor="takingType" className="block text-sm font-medium text-gray-700">Medicine Taking Type</label>
            <select id="takingType" className="select select-bordered w-full mt-1" required>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
              <option value="custom">Custom</option>
            </select>
          </div>
          <div>
            <label htmlFor="takingTimes" className="block text-sm font-medium text-gray-700">Times per Day</label>
            <input type="text" id="takingTimes" className="input input-bordered w-full mt-1" required />
          </div>
          <div>
            <label htmlFor="takingTime" className="block text-sm font-medium text-gray-700">Medicine Taking Time (Alarm)</label>
            <input type="text" id="takingTime" className="input input-bordered w-full mt-1" required />
          </div>
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Medicine Quantity</label>
            <input type="number" id="quantity" className="input input-bordered w-full mt-1" required />
          </div>
          <div>
            <label htmlFor="mealTime" className="block text-sm font-medium text-gray-700">Before/After Meal</label>
            <select id="mealTime" className="select select-bordered w-full mt-1" required>
              <option value="before">Before Meal</option>
              <option value="after">After Meal</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary w-full">Save Prescription</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePrescription;
