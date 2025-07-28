
import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-900">
      <div className="border-2 border-white p-10 rounded-2xl bg-gray-800">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center space-y-4"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            type="email"
            placeholder="Enter your email"
            className="border-2 border-emerald-600 text-xl rounded-full px-4 py-2 bg-gray-700 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
            type="password"
            placeholder="Enter your password"
            className="border-2 border-emerald-600 text-xl rounded-full px-4 py-2 bg-gray-700 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button
            type="submit"
            className="text-white bg-emerald-600 text-xl rounded-full px-6 py-2 hover:bg-emerald-700 transition-colors duration-300 cursor-pointer "
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

