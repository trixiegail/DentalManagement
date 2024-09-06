import React, { useState } from "react";
import NavNurseDentist from '../components/NavNurseDentist';
import { Box, styled, TextField, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const SecondNavbar = styled('nav')({
  backgroundColor: '#fff',
  boxShadow: '0 4px 2px -2px gray',
  padding: '10px 0',
});

const NavLink = styled('a')(({ theme }) => ({
  margin: theme.spacing(0, 2),
  textDecoration: 'none',
  color: '#000',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const CoverImage = styled('img')({
  width: '100%',
  height: 'auto',
  display: 'block',
});

const SearchContainer = styled(Box)({
  position: 'absolute',
  top: '70%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
});

const SearchBar = styled(TextField)({
  marginRight: '10px',
  width: '400px', // Decreased width of the search bar to accommodate space for the buttons
  backgroundColor: '#fff', // Set background color to white
  borderRadius: '15px',
});

const SearchButton = styled(Button)({
  backgroundColor: '#a52a2a', // Background color changed to #a52a2a
  color: '#fff', // Text color changed to white
  '&:hover': {
    backgroundColor: '#a52a2a',
  },
  marginTop: '10px', // Added margin-top to the button
});

const CheckApplicantsButton = styled(Button)({
  backgroundColor: '#a52a2a', // Background color changed to #a52a2a
  color: '#fff', // Text color changed to white
  '&:hover': {
    backgroundColor: '#a52a2a',
  },
  marginTop: '10px', // Added margin-top to the button
});

const SearchResultList = styled(Box)({
  backgroundColor: '#fff', // Set background color to white
  padding: '10px', // Add padding to the list
  borderRadius: '10px', // Add border radius to the list
  marginTop: '10px', // Add margin top to separate from the search bar
});

function RegisterForCheckup() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Simulated search logic for demonstration purposes
    console.log('Searching for:', searchQuery);
    // Here you would perform actual search logic, e.g., fetch data from an API

    // Simulated search results for demonstration purposes
    const mockSearchResults = [
      { id: 1, fullName: 'John Doe' },
      { id: 2, fullName: 'Jane Smith' },
    ];

    setSearchResults(mockSearchResults);
  };

  return (
    <div>
      <NavNurseDentist />
      {/* Search Bar */}
      <SearchContainer>
        <SearchBar
          label="Search Students"
          variant="outlined"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchButton variant="contained" onClick={handleSearch}>Search</SearchButton>
        <br />
        {/* Render search results */}
        {searchResults.length > 0 && (
          <SearchResultList>
            <Typography variant="h6" gutterBottom align="center">
              Relevant Name
            </Typography>
            {searchResults.map((student) => (
              <Link to={{
                pathname: `/CheckupForm/${student.id}`,
                state: { studentData: student } // Pass the student data as state
              }} key={student.id} style={{ textDecoration: 'none' }}>
                <Typography variant="body1" gutterBottom align="center">
                  {student.fullName}
                </Typography>
              </Link>
            ))}
          </SearchResultList>
        )}
        {/* Link to CheckupApplicantList */}
        <Link to="/CheckupApplicantList" style={{ textDecoration: 'none' }}>
          <CheckApplicantsButton variant="contained">Check Applicants</CheckApplicantsButton>
        </Link>
      </SearchContainer>

      {/* Cover Image */}
      <CoverImage src="src/image/nursecover.png" alt="Nurse Cover" />
    </div>
  );
}

export default RegisterForCheckup;
