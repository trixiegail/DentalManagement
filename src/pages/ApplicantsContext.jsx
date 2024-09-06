// ApplicantsContext.js
import React, { createContext, useState } from 'react';


export const ApplicantsContext = createContext();

export const ApplicantsProvider = ({ children }) => {
  const [applicants, setApplicants] = useState([
    { id: 1, firstName: 'John', lastName: 'Doe', course: 'Computer Science', year: 3, date: '2023-05-01' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', course: 'Information Technology', year: 2, date: '2023-05-02' },
    { id: 3, firstName: 'Bob', lastName: 'Johnson', course: 'Computer Science', year: 4, date: '2023-05-03' },
    // Add more applicants as needed
  ]);

  const addApplicant = (applicant) => {
    setApplicants((prevApplicants) => [...prevApplicants, applicant]);
  };

  return (
    <ApplicantsContext.Provider value={{ applicants, addApplicant }}>
      {children}
    </ApplicantsContext.Provider>
  );
};
