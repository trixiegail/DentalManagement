import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from '../components/Nav';

function NurseArchive() {
    const [archivedAccounts, setArchivedAccounts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
  
    useEffect(() => {
      fetchArchivedAccounts();
    }, []);
  
    const fetchArchivedAccounts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/user/nurses/archived');
  
        if (response.status === 200) {
          setArchivedAccounts(response.data);
          console.log('Archived accounts fetched successfully:', response.data);
        } else {
          throw new Error('Failed to fetch archived accounts');
        }
      } catch (error) {
        console.error('Error fetching archived accounts:', error);
      }
    };
  
    const handleSearch = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/user/nurses/search/archived?keyword=${searchTerm}`);
        if (response.status === 200) {
          setArchivedAccounts(response.data);
          console.log('Archived accounts searched successfully:', response.data);
        } else {
          throw new Error('Failed to search archived accounts');
        }
      } catch (error) {
        console.error('Error searching archived accounts:', error);
      }
    };
  
    const handleUnarchive = async (id) => {
      try {
        const response = await axios.post(`http://localhost:8080/user/nurses/unarchiveNurse/${id}`);
        if (response.status === 200) {
          console.log('Account unarchived successfully');
          fetchArchivedAccounts(); // Refresh the list
        } else {
          throw new Error('Failed to unarchive account');
        }
      } catch (error) {
        console.error('Error unarchiving account:', error);
      }
    };
  
    return (
      <div className='ml-[265px]'>
        <Nav />
        <img src="src/image/logo.png" alt="Logo" className="absolute top-0 left-5 ml-[265px] object-center"/>
  
        <div className="w-50 ml-10 mt-[120px] relative">
          <h1 className="text-2xl font-bold mb-5">Archived Nurse Accounts</h1>
          
          <div className="flex items-center mb-5">
            <input
              type="text"
              placeholder="Search archived accounts"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow p-2 border border-gray-300 rounded-lg shadow-sm"
            />
            <button
              onClick={handleSearch}
              className="ml-2 p-2 bg-[#F7C301] text-white rounded-lg shadow-md hover:bg-[#F7C301]"
            >
              Search
            </button>
          </div>
          
          <div className="overflow-auto h-96 mt-2">
            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
              <thead className="bg-[#88343B] text-white">
                <tr>
                  <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">ID Number</th>
                  <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">First Name</th>
                  <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">Last Name</th>
                  <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">Email</th>
                  <th className="w-1/6 py-3 px-4 uppercase font-semibold text-sm">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {archivedAccounts.map((account) => (
                  <tr key={account.id}>
                    <td className="w-1/6 py-3 px-4">{account.idNumber}</td>
                    <td className="w-1/6 py-3 px-4">{account.firstname}</td>
                    <td className="w-1/6 py-3 px-4">{account.lastname}</td>
                    <td className="w-1/6 py-3 px-4">{account.email}</td>
                    <td className="w-1/6 py-3 px-4">
                      <button
                        onClick={() => handleUnarchive(account.id)}
                        className="px-4 py-2 bg-[#88343B] text-white rounded-lg shadow-md hover:bg-[#88343B]"
                      >
                        Unarchive
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
}

export default NurseArchive