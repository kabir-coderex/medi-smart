import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username/Email</label>
            <input type="text" id="username" className="input input-bordered w-full mt-1" required />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" className="input input-bordered w-full mt-1" required />
          </div>
          <button type="submit" className="btn btn-primary w-full" onClick={()=> window.location.href = '/dashboard'}>Login</button>
        </form>
        <p className="text-center">
          Don't have an account? <a href="/signup" className="text-blue-500">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
