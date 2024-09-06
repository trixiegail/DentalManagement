import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import { Box, Typography, TextField, Button, Grid, styled } from '@mui/material';

const Container = styled(Box)(({ theme }) => ({
  maxWidth: '800px',
  margin: '0 auto',
  padding: theme.spacing(3),
}));

const Header = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: theme.spacing(2),
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  marginBottom: theme.spacing(3),
}));

const StudentImage = styled('img')({
  height: '160px',
  width: 'auto',
  float: 'right',
});

const InputField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiInputBase-root': {
    color: '#000', // Text color
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#000', // Outline color
  },
  '& .MuiInputLabel-root': {
    color: '#000', // Label color
  },
}));

const RegisterButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#F7C301',
  color: '#000',
  '&:hover': {
    backgroundColor: '#F7C301',
  },
}));

function RegisterForCheckup() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('Ariel Gwapo');
  const [idNumber, setIdNumber] = useState('xx-xxxx-xxx');
  const [department, setDepartment] = useState('College of Computer Studies');
  const [course, setCourse] = useState('Information Technology');
  const [year, setYear] = useState('3');
  const [dateOfBirth, setDateOfBirth] = useState('10-05-2002');
  const [phoneNumber, setPhoneNumber] = useState('xx-xxxx-xxxx');

  const handleRegister = () => {
    // Alert message
    alert('You have successfully registered for checkup.');

    // Create new applicant
    const newApplicant = {
      id: idNumber,
      firstName: fullName.split(' ')[0],
      lastName: fullName.split(' ')[1],
      course,
      year,
      date: new Date().toISOString().split('T')[0], // Current date
    };

    // Send the registration data to the server
    // Here you would typically send the data to the server using an API call

    // Navigate to check-up page
    navigate('/check-up');
  };

  return (
    <div>
      <Nav />
      <Container>
        <Header>
          <Typography variant="h4">Student Information</Typography>
        </Header>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <StudentImage src="src/image/student.png" alt="student" />
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <InputField
              label="Full Name"
              value={fullName}
              InputProps={{
                readOnly: true,
                style: { color: '#000' },
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              label="Id Number"
              value={idNumber}
              InputProps={{
                readOnly: true,
                style: { color: '#000' },
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              label="Department"
              value={department}
              InputProps={{
                readOnly: true,
                style: { color: '#000' },
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              label="Course"
              value={course}
              InputProps={{
                readOnly: true,
                style: { color: '#000' },
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <InputField
              label="Year"
              value={year}
              InputProps={{
                readOnly: true,
                style: { color: '#000' },
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <InputField
              label="Date of Birth"
              value={dateOfBirth}
              InputProps={{
                readOnly: true,
                style: { color: '#000' },
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              label="Phone Number"
              value={phoneNumber}
              InputProps={{
                readOnly: true,
                style: { color: '#000' },
              }}
              fullWidth
            />
          </Grid>
        </Grid>
        <Box sx={{ textAlign: 'center', marginTop: 4 }}>
          <Typography variant="h5">Register for clinical check-up</Typography>
          <Typography variant="body1">
            This check-up is to assess the well-being of the student and determine whether they are eligible for a dental appointment.
          </Typography>
          <RegisterButton
            variant="contained"
            onClick={handleRegister}
          >
            Register
          </RegisterButton>
          <Typography variant="body2">
            By clicking register, you confirm to schedule for check-up in the university clinic.
          </Typography>
        </Box>
      </Container>
    </div>
  );
}

export default RegisterForCheckup;
