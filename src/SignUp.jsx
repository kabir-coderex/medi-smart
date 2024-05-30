import React from 'react';

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" className="input input-bordered w-full mt-1" required />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="text" id="phone" className="input input-bordered w-full mt-1" required />
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" className="input input-bordered w-full mt-1" required />
          </div>
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">User Role</label>
            <select id="role" className="select select-bordered w-full mt-1" required>
              <option value="normal">Normal User</option>
              <option value="pharmacy">Pharmacy Shop Owner</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary w-full" onClick={()=> window.location.href = '/dashboard'}>Sign Up</button>
        </form>
        <p className="text-center">
          Already have an account? <a href="/login" className="text-blue-500">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
