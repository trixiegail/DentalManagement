import React, { useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Grid,
  Avatar,
  TextField,
  Button,
  Collapse,
  Card,
  CardContent,
  CardActions,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { MedicalHistoryContext } from './MedicalHistoryProvider';
import NavNurseDentist from '../components/NavNurseDentist';
import Nav from '../components/Nav';

const CheckupForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [formValues, setFormValues] = useState({
    bloodPressure: '',
    heartRate: '',
    respiratoryRate: '',
    temperature: '',
    oralHealthStatus: '',
    cavities: '',
    gumHealth: '',
    generalHealth: '',
    healthConcerns: '',
  });
  const [initialFormValues, setInitialFormValues] = useState({}); // Track initial form values
  const [isEditing, setIsEditing] = useState(true);
  const [medicalRecords, setMedicalRecords] = useState([]);
  const [showMedicalRecords, setShowMedicalRecords] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [studentInfo, setStudentInfo] = useState({
    fullName: '',
    id: '',
    department: '',
    course: '',
    year: '',
    dateOfBirth: '',
    phoneNumber: '',
  });
  const [showIncompleteFieldsDialog, setShowIncompleteFieldsDialog] = useState(false);

  const { addMedicalRecord } = useContext(MedicalHistoryContext);
  const location = useLocation();
  const navigate = useNavigate();
  const { applicant } = location.state || {};

  // Function to handle form field changes
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // Function to save the form values
  const handleSave = () => {
    if (isFormEmpty()) {
      setShowIncompleteFieldsDialog(true); // Show warning dialog if fields are not filled
    } else {
      setIsEditing(false);
      addMedicalRecord(formValues); // Save the form values in the context
      const updatedRecords = [...medicalRecords, { ...formValues, date: new Date() }];
      setMedicalRecords(updatedRecords); // Add the form values to the medical records with the current date
      clearForm(); // Clear the form after saving
    }
  };

  // Function to open medical records drawer
  const handleMedicalRecords = () => {
    setShowMedicalRecords(true);
  };

  // Function to close medical records drawer
  const closeMedicalRecords = () => {
    setShowMedicalRecords(false);
  };

  // Function to handle click on a medical record item
  const handleRecordClick = (record) => {
    setSelectedRecord(record);
    setFormValues(record); // Populate the form fields with the selected record's data
    setIsEditing(false); // Disable editing mode when selecting a record
  };

  // Function to handle "Done" button click
  const handleDone = () => {
    clearForm(); // Clear the form fields
    setIsEditing(true); // Enable editing mode
    setSelectedRecord(null); // Deselect the selected record
    setShowMedicalRecords(false); // Close the medical records drawer
  };

  // Function to clear the form fields
  const clearForm = () => {
    setFormValues({
      bloodPressure: '',
      heartRate: '',
      respiratoryRate: '',
      temperature: '',
      oralHealthStatus: '',
      cavities: '',
      gumHealth: '',
      generalHealth: '',
      healthConcerns: '',
    });
    setIsEditing(true); // Ensure editing mode is enabled after clearing the form
  };

  // Set default form values to the selected applicant's information
  useEffect(() => {
    if (applicant) {
      setStudentInfo(applicant); // Set student information from applicant
      setFormValues((prevValues) => ({
        ...prevValues,
        ...applicant, // Merge the applicant's details
      }));
    }
  }, [applicant]);

  // Track initial form values when component mounts
  useEffect(() => {
    setInitialFormValues(formValues);
  }, []);

  // Check if the form values have changed
  const isFormChanged = () => {
    return Object.keys(formValues).some((key) => formValues[key] !== initialFormValues[key]);
  };

  // Check if all the fields are empty to disable the Save button
  const isFormEmpty = () => {
    return Object.values(formValues).every((value) => value === '');
  };

  // Function to close incomplete fields warning dialog
  const handleCloseIncompleteFieldsDialog = () => {
    setShowIncompleteFieldsDialog(false);
  };

  return (
    <Box>
      <NavNurseDentist /> {/* Include NavNurseDentist navigation bar */}
      <Box sx={{ backgroundColor: 'white', padding: 4, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom align="center">
          STUDENT INFORMATION
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={9}>
            {/* Render the applicant's details */}
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Full Name"
                  name="fullName"
                  value={studentInfo.fullName || ''}
                  fullWidth
                  variant="outlined"
                  disabled
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Id Number"
                  name="id"
                  value={studentInfo.id || ''}
                  fullWidth
                  variant="outlined"
                  disabled
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Department"
                  name="department"
                  value={studentInfo.department || ''}
                  fullWidth
                  variant="outlined"
                  disabled
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Course"
                  name="course"
                  value={studentInfo.course || ''}
                  fullWidth
                  variant="outlined"
                  disabled
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Year"
                  name="year"
                  value={studentInfo.year || ''}
                  fullWidth
                  variant="outlined"
                  disabled
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Date of Birth"
                  name="dateOfBirth"
                  value={studentInfo.dateOfBirth || ''}
                  fullWidth
                  variant="outlined"
                  disabled
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Phone Number"
                  name="phoneNumber"
                  value={studentInfo.phoneNumber || ''}
                  fullWidth
                  variant="outlined"
                  disabled
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={3}>
           
            <img
                className="h-40 w-auto"
                src="src/image/student.png"
                sx={{
                  width: 120,
                  height: 120,
                  borderRadius: 2, // Adjust the value for rounded corners
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  display: 'block',
                }}
              />
          </Grid>
        </Grid>
        <Box sx={{ marginTop: 2, display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#a52a2a',
              '&:hover': {
                backgroundColor: '#F7C301',
              },
            }}
            onClick={() => setShowForm(!showForm)}
          >
            Check Student
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#a52a2a',
              '&:hover': {
                backgroundColor: '#F7C301',
              },
            }}
            onClick={handleMedicalRecords}
          >
            Medical Records
          </Button>
        </Box>
        <Collapse in={showForm} unmountOnExit>
          <Card sx={{ marginTop: 2 }}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Blood Pressure"
                    name="bloodPressure"
                    value={formValues.bloodPressure}
                    onChange={handleFormChange}
                    disabled={!isEditing}
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Heart Rate"
                    name="heartRate"
                    value={formValues.heartRate}
                    onChange={handleFormChange}
                    disabled={!isEditing}
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Respiratory Rate"
                    name="respiratoryRate"
                    value={formValues.respiratoryRate}
                    onChange={handleFormChange}
                    disabled={!isEditing}
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Temperature"
                    name="temperature"
                    value={formValues.temperature}
                    onChange={handleFormChange}
                    disabled={!isEditing}
                    fullWidth
                    variant="outlined"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    label="Oral Health Status"
                    name="oralHealthStatus"
                    value={formValues.oralHealthStatus}
                    onChange={handleFormChange}
                    disabled={!isEditing}
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Presence of Cavities"
                    name="cavities"
                    value={formValues.cavities}
                    onChange={handleFormChange}
                    disabled={!isEditing}
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Gum Health"
                    name="gumHealth"
                    value={formValues.gumHealth}
                    onChange={handleFormChange}
                    disabled={!isEditing}
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="General Health Condition"
                    name="generalHealth"
                    value={formValues.generalHealth}
                    onChange={handleFormChange}
                    disabled={!isEditing}
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Any specific health concerns"
                    name="healthConcerns"
                    value={formValues.healthConcerns}
                    onChange={handleFormChange}
                    disabled={!isEditing}
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#a52a2a',
                  '&:hover': {
                    backgroundColor: '#F7C301',
                  },
                }}
                onClick={() => setIsEditing(true)}
                disabled={isEditing || !isFormChanged() || !Object.values(formValues).some((value) => value !== '')}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#a52a2a',
                  '&:hover': {
                    backgroundColor: '#F7C301',
                  },
                }}
                onClick={handleSave}
                disabled={!isFormChanged() || isFormEmpty()}
              >
                Save
              </Button>
            </CardActions>
          </Card>
        </Collapse>
        <Drawer
          anchor="right"
          open={showMedicalRecords}
          onClose={closeMedicalRecords}
        >
          <Box sx={{ width: 400, padding: 2 }}>
            <Typography variant="h6" gutterBottom align="center">
              Medical Records
            </Typography>
            <List>
              {medicalRecords.map((record, index) => (
                <ListItem key={index} button onClick={() => handleRecordClick(record)}>
                  <ListItemText primary={`${new Date(record.date).toDateString()} - ${new Date(record.date).toLocaleTimeString()}`} />
                </ListItem>
              ))}
            </List>
            {selectedRecord && (
              <div>
                <Typography variant="h6" gutterBottom>
                  Records for {new Date(selectedRecord.date).toDateString()} - {new Date(selectedRecord.date).toLocaleTimeString()}
                </Typography>
                <Card sx={{ marginBottom: 2 }}>
                  <CardContent>
                    <Typography variant="body2">
                      Blood Pressure: {selectedRecord.bloodPressure}
                    </Typography>
                    <Typography variant="body2">
                      Heart Rate: {selectedRecord.heartRate}
                    </Typography>
                    <Typography variant="body2">
                      Respiratory Rate: {selectedRecord.respiratoryRate}
                    </Typography>
                    <Typography variant="body2">
                      Temperature: {selectedRecord.temperature}
                    </Typography>
                    <Typography variant="body2">
                      Oral Health Status: {selectedRecord.oralHealthStatus}
                    </Typography>
                    <Typography variant="body2">
                      Presence of Cavities: {selectedRecord.cavities}
                    </Typography>
                    <Typography variant="body2">
                      Gum Health: {selectedRecord.gumHealth}
                    </Typography>
                    <Typography variant="body2">
                      General Health Condition: {selectedRecord.generalHealth}
                    </Typography>
                    <Typography variant="body2">
                      Any specific health concerns: {selectedRecord.healthConcerns}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            )}
          </Box>
        </Drawer>
        {selectedRecord && (
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#a52a2a',
              '&:hover': {
                backgroundColor: '#F7C301',
              },
              marginTop: 2,
            }}
            onClick={handleDone}
          >
            Done
          </Button>
        )}

        {/* Incomplete Fields Dialog */}
        <Dialog open={showIncompleteFieldsDialog} onClose={handleCloseIncompleteFieldsDialog}>
          <DialogTitle>Incomplete Fields</DialogTitle>
          <DialogContent>
            <Typography>
              Please fill in all fields before saving the form.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              sx={{
                backgroundColor: '#a52a2a',
                '&:hover': {
                  backgroundColor: '#F7C301',
                },
              }}
              onClick={handleCloseIncompleteFieldsDialog}
              color="primary"
            >
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default CheckupForm;
