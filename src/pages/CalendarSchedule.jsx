import React, { useState } from 'react';
import './CalendarSchedule.css';
import { Modal, Switch, Button, Row, Col } from 'antd'; // Assuming you have Ant Design installed
import NavNurseDentist from '../components/NavNurseDentist'; // Adjust path as necessary
import { format, startOfMonth, endOfMonth, addMonths, eachDayOfInterval } from 'date-fns'; // Import necessary date-fns functions
 
const timeSlots = {
  morning: [
    { start: '09:00', end: '10:00' },
    { start: '10:30', end: '11:30' }
  ],
  afternoon: [
    { start: '13:00', end: '14:00' },
    { start: '14:30', end: '15:30' }
  ]
};
 
const CalendarSchedule = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [morningAvailable, setMorningAvailable] = useState(true); // Default to available
  const [afternoonAvailable, setAfternoonAvailable] = useState(true); // Default to available
  const [currentMonth, setCurrentMonth] = useState(new Date()); // State to track current month
  const [timeAvailability, setTimeAvailability] = useState({}); // State to track availability for each hour
 
  // Function to handle date click
  const handleDateClick = (date) => {
    setSelectedDate(date);
    // Reset availability states based on your business logic
    setMorningAvailable(true); // Default to available
    setAfternoonAvailable(true); // Default to available
  };
 
  // Function to handle morning switch toggle
  const handleMorningToggle = (checked) => {
    setMorningAvailable(checked);
  };
 
  // Function to handle afternoon switch toggle
  const handleAfternoonToggle = (checked) => {
    setAfternoonAvailable(checked);
  };
 
  // Function to handle switch toggle for each time slot
  const handleTimeToggle = (timeOfDay, index) => (checked) => {
    const updatedAvailability = { ...timeAvailability };
    const slot = timeSlots[timeOfDay][index];
    updatedAvailability[`${timeOfDay}-${index}`] = checked;
    setTimeAvailability(updatedAvailability);
  };
 
  // Function to navigate to previous month
  const goToPreviousMonth = () => {
    setCurrentMonth(prevMonth => addMonths(prevMonth, -1));
  };
 
  // Function to navigate to next month
  const goToNextMonth = () => {
    setCurrentMonth(prevMonth => addMonths(prevMonth, 1));
  };
 
  // Generate calendar dates for the current month
  const startDate = startOfMonth(currentMonth); // Start date of the current month
  const endDate = endOfMonth(currentMonth); // End date of the current month
  const datesInMonth = eachDayOfInterval({ start: startDate, end: endDate }); // Array of dates in the current month
 
  // Format date to 'yyyy-MM-dd' for Ant Design Modal title
  const formattedDate = (date) => format(date, 'yyyy-MM-dd');
 
  // Function to render time slots
  const renderTimeSlots = (timeOfDay) => {
    return timeSlots[timeOfDay].map((slot, index) => (
      <Row key={index} style={{ marginBottom: 10 }}>
        <Col span={12}>
          <span>{slot.start} - {slot.end}</span>
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Switch
            className="switch-custom" // Add custom class here
            checked={timeAvailability[`${timeOfDay}-${index}`] !== false}
            onChange={handleTimeToggle(timeOfDay, index)}
          />
        </Col>
      </Row>
    ));
  };
 
  return (
    <div>
      <NavNurseDentist /> {/* Place the navigation bar component here */}
      <br />
      <div className="calendar">
        <div className="calendar-header">
          <Button onClick={goToPreviousMonth}>{'<'}</Button>
          <h3>{format(currentMonth, 'MMMM yyyy')}</h3>
          <Button onClick={goToNextMonth}>{'>'}</Button>
        </div>
        <div className="calendar-days-header">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="calendar-day-label">{day}</div>
          ))}
        </div>
        <div className="calendar-grid">
          {datesInMonth.map((date) => (
            <div
              key={date.toISOString()}
              className={`calendar-day ${selectedDate && date.toISOString() === selectedDate.toISOString() ? 'selected' : ''}`}
              onClick={() => handleDateClick(date)}
            >
              <div className="calendar-date">{format(date, 'dd')}</div>
              {/* Additional styling or content for each day can be added here */}
            </div>
          ))}
        </div>
 
        {/* Modal for morning and afternoon availability */}
        <Modal
          title={`Availability for ${selectedDate ? formattedDate(selectedDate) : ''}`}
          visible={selectedDate !== null}
          onCancel={() => setSelectedDate(null)}
          footer={[
            <Button key="cancel" className="custom-button" onClick={() => setSelectedDate(null)}>
              Cancel
            </Button>
          ]}
        >
          <div>
            <h4>Morning</h4>
            <Switch
              className="switch-custom" // Add custom class here
              checked={morningAvailable}
              onChange={handleMorningToggle}
            />
            {morningAvailable && renderTimeSlots('morning')}
          </div>
          <div style={{ marginTop: 20 }}>
            <h4>Afternoon</h4>
            <Switch
              className="switch-custom" // Add custom class here
              checked={afternoonAvailable}
              onChange={handleAfternoonToggle}
            />
            {afternoonAvailable && renderTimeSlots('afternoon')}
          </div>
        </Modal>
      </div>
    </div>
  );
};
 
export default CalendarSchedule;