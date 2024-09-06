// src/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginStudent = () => {
  const [idNumber, setIdNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();


  const handleStudentLogin = async (event) => { 
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      const endpoint = 'http://localhost:8080/user/login';
      const response = await axios.post(endpoint, { idNumber, password });
  
      if (response.data) {
        console.log('Student Login successful:', response.data);
        navigate('/home');
      } else {
        setErrorMessage("Student login failed: Invalid username or password");
        console.error('Student Login failed: Response data is undefined');
      }
    } catch (error) {
      setErrorMessage("Invalid username or password");
      console.error('Student Login failed:', error.response?.data || error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-sm p-6 bg-[#88343B] border-gray-200 rounded shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center text-[#fff]">Student Access Module</h2>
        <form onSubmit={handleStudentLogin}>
          <div className="mb-4">
            <p>{errorMessage}</p>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-[#fff]">
            Username (ID Number)
            </label>
            <input
              type="text"
              id="idNumber"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
              value={idNumber}
              onChange={(e) => setIdNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-[#fff]">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-100"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
          <p className="text-sm font-medium text-[#fff]">Forgot your password? <Link to="/change-password">Click here</Link></p>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-[#F7C301] rounded hover:bg-yellow-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginStudent;
