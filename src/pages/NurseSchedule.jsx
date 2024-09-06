import React, { useState } from 'react';

const NurseSchedule = () => {
  const [schedule, setSchedule] = useState([]);

  // Function to toggle availability for a specific day and period
  const toggleAvailability = (dayIndex, periodIndex) => {
    const updatedSchedule = [...schedule];
    updatedSchedule[dayIndex].periods[periodIndex].available = !updatedSchedule[dayIndex].periods[periodIndex].available;
    setSchedule(updatedSchedule);
  };

  // Function to indicate availability for checkup appointment for a specific day
  const toggleCheckupAvailability = (dayIndex) => {
    const updatedSchedule = [...schedule];
    updatedSchedule[dayIndex].checkupAvailable = !updatedSchedule[dayIndex].checkupAvailable;
    setSchedule(updatedSchedule);
  };

  // Function to initialize the schedule
  const initializeSchedule = () => {
    // Initialize schedule with empty periods for morning and afternoon
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const initialSchedule = days.map(day => ({
      day,
      periods: [
        { time: 'Morning', available: false },
        { time: 'Afternoon', available: false }
      ],
      checkupAvailable: false
    }));
    setSchedule(initialSchedule);
  };

  // Rendering the schedule
  return (
    <div>
      <h2>Nurse Schedule</h2>
      <button onClick={initializeSchedule}>Initialize Schedule</button>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Morning</th>
            <th>Afternoon</th>
            <th>Checkup Availability</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((day, index) => (
            <tr key={index}>
              <td>{day.day}</td>
              {day.periods.map((period, periodIndex) => (
                <td key={periodIndex}>
                  <button onClick={() => toggleAvailability(index, periodIndex)}>
                    {period.available ? 'Available' : 'Unavailable'}
                  </button>
                </td>
              ))}
              <td>
                <button onClick={() => toggleCheckupAvailability(index)}>
                  {day.checkupAvailable ? 'Available' : 'Unavailable'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NurseSchedule;
