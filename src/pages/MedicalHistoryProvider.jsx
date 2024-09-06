// MedicalHistoryProvider.jsx
import React, { createContext, useState } from 'react';

export const MedicalHistoryContext = createContext();

const MedicalHistoryProvider = ({ children }) => {
  const [medicalHistory, setMedicalHistory] = useState([]);

  const addMedicalRecord = (record) => {
    setMedicalHistory((prevHistory) => [...prevHistory, record]);
  };

  return (
    <MedicalHistoryContext.Provider value={{ medicalHistory, addMedicalRecord }}>
      {children}
    </MedicalHistoryContext.Provider>
  );
};

export default MedicalHistoryProvider;
