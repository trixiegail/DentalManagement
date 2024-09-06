import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Typography, Grid, TextField, Avatar } from '@mui/material';

const StudentMedicalRecords = () => {
  const location = useLocation();
  const { state } = location;
  const { fullName, id, department, course, year, dateOfBirth, phoneNumber, bloodPressure, heartRate, respiratoryRate, temperature, oralHealthStatus, cavities, gumHealth, generalHealth, healthConcerns } = state || {};

  return (
    <Box sx={{ backgroundColor: 'white', padding: 4, borderRadius: 2 }}>
      <Typography variant="h6" gutterBottom align="center">
        MEDICAL RECORDS
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField label="Full Name" value={fullName || ''} fullWidth variant="outlined" disabled />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Id Number" value={id || ''} fullWidth variant="outlined" disabled />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Department" value={department || ''} fullWidth variant="outlined" disabled />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Course" value={course || ''} fullWidth variant="outlined" disabled />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField label="Year" value={year || ''} fullWidth variant="outlined" disabled />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField label="Date of Birth" value={dateOfBirth || ''} fullWidth variant="outlined" disabled />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField label="Phone Number" value={phoneNumber || ''} fullWidth variant="outlined" disabled />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Blood Pressure" value={bloodPressure || ''} fullWidth variant="outlined" disabled />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Heart Rate" value={heartRate || ''} fullWidth variant="outlined" disabled />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Respiratory Rate" value={respiratoryRate || ''} fullWidth variant="outlined" disabled />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Temperature" value={temperature || ''} fullWidth variant="outlined" disabled />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Oral Health Status" value={oralHealthStatus || ''} fullWidth variant="outlined" disabled />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Presence of Cavities" value={cavities || ''} fullWidth variant="outlined" disabled />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Gum Health" value={gumHealth || ''} fullWidth variant="outlined" disabled />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="General Health Condition" value={generalHealth || ''} fullWidth variant="outlined" disabled />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField label="Any specific health concerns" value={healthConcerns || ''} fullWidth variant="outlined" disabled />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={3}>
          <Avatar
            alt="Student Avatar"
            src="/student.png"
            sx={{ width: 120, height: 120, marginLeft: 'auto', display: 'block' }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default StudentMedicalRecords;