import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import { MedicalHistoryContext } from './MedicalHistoryProvider';

const StudentMedicalHistory = () => {
  const [editMode, setEditMode] = useState(false);
  const [fullName, setFullName] = useState('Ariel Gwapo');
  const [idNumber, setIdNumber] = useState('xx-xxxx-xxx');
  const [department, setDepartment] = useState('College of Computer Studies');
  const [course, setCourse] = useState('Information Technology');
  const [year, setYear] = useState('3');
  const [dateOfBirth, setDateOfBirth] = useState('10-05-2002');
  const [phoneNumber, setPhoneNumber] = useState('xx-xxxx-xxxx');
  const { medicalHistory } = useContext(MedicalHistoryContext);
  const navigate = useNavigate();
  const [showMedicalHistory, setShowMedicalHistory] = useState(false); // State variable to track medical history visibility

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    setEditMode(false);
  };

  const toggleMedicalHistory = () => {
    setShowMedicalHistory((prev) => !prev); // Toggle the state to show/hide medical history
  };

  return (
    <div>
      <Nav />
      <form className="container mx-auto px-5">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <header className="bg-white shadow">
              <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                  Student Information
                </h1>
              </div>
            </header>

            <div className="overflow-hidden rounded-lg bg-gray-200 float-right">
              <img className="h-40 w-auto" src="src/image/student.png" alt="me" />
            </div>

            <div className="mt-10 grid grid-cols-1 gap-x-1 gap-y-5 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="full-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Full Name
                </label>
                <div className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  {editMode ? (
                    <input
                      type="text"
                      id="full-name"
                      className="w-full text-gray-900"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  ) : (
                    <span className="flex select-none items-center pl-3 text-gray-900 sm:text-sm">
                      {fullName}
                    </span>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="id-number" className="block text-sm font-medium leading-6 text-gray-900">
                  ID Number
                </label>
                <div className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  {editMode ? (
                    <input
                      type="text"
                      id="id-number"
                      className="w-full text-gray-900"
                      value={idNumber}
                      onChange={(e) => setIdNumber(e.target.value)}
                    />
                  ) : (
                    <span className="flex select-none items-center pl-3 text-gray-900 sm:text-sm">
                      {idNumber}
                    </span>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="department" className="block text-sm font-medium leading-6 text-gray-900">
                  Department
                </label>
                <div className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  {editMode ? (
                    <input
                      type="text"
                      id="department"
                      className="w-full text-gray-900"
                      value={department}
                      onChange={(e) => setDepartment(e.target.value)}
                    />
                  ) : (
                    <span className="flex select-none items-center pl-3 text-gray-900 sm:text-sm">
                      {department}
                    </span>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="course" className="block text-sm font-medium leading-6 text-gray-900">
                  Course
                </label>
                <div className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  {editMode ? (
                    <input
                      type="text"
                      id="course"
                      className="w-full text-gray-900"
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                    />
                  ) : (
                    <span className="flex select-none items-center pl-3 text-gray-900 sm:text-sm">
                      {course}
                    </span>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="year" className="block text-sm font-medium leading-6 text-gray-900">
                  Year
                </label>
                <div className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  {editMode ? (
                    <input
                      type="text"
                      id="year"
                      className="w-full text-gray-900"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                    />
                  ) : (
                    <span className="flex select-none items-center pl-3 text-gray-900 sm:text-sm">
                      {year}
                    </span>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="date-of-birth" className="block text-sm font-medium leading-6 text-gray-900">
                  Date of Birth
                </label>
                <div className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  {editMode ? (
                    <input
                      type="text"
                      id="date-of-birth"
                      className="w-full text-gray-900"
                      value={dateOfBirth}
                      onChange={(e) => setDateOfBirth(e.target.value)}
                    />
                  ) : (
                    <span className="flex select-none items-center pl-3 text-gray-900 sm:text-sm">
                      {dateOfBirth}
                    </span>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="phone-number" className="block text-sm font-medium leading-6 text-gray-900">
                  Phone Number
                </label>
                <div className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  {editMode ? (
                    <input
                      type="text"
                      id="phone-number"
                      className="w-full text-gray-900"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  ) : (
                    <span className="flex select-none items-center pl-3 text-gray-900 sm:text-sm">
                      {phoneNumber}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            {editMode ? (
              <button
                type="button"
                onClick={handleSave}
                className="rounded-md bg-[#F7C301] px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-[#F7C301] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F7C301]"
              >
                Save
              </button>
            ) : (
              <button
                type="button"
                onClick={handleEdit}
                className="rounded-md bg-[#F7C301] px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-[#F7C301] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F7C301]"
              >
                Edit
              </button>
            )}

            <button
              type="button"
              onClick={toggleMedicalHistory}
              className="rounded-md bg-[#F7C301] px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-[#F7C301] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F7C301] ml-4"
            >
              {showMedicalHistory ? 'Hide Medical History' : 'Show Medical History'}
            </button>
          </div>
        </div>

        {showMedicalHistory && (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Medical Records</h2>
            <div className="grid grid-cols-2 gap-4">
              {medicalHistory.map((record, index) => (
                <div key={index}>
                  {Object.entries(record).map(([key, value]) => (
                    <div key={key}>
                      <p className="text-gray-700 font-medium">{key}</p>
                      <p>{value}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default StudentMedicalHistory;
