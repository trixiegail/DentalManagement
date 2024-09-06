import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import Studfooter from '../components/Studfooter';
import Studnav from '../components/Studnav';

function App() {
  const [selectedDate, setSelectedDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [slots, setSlots] = useState({
    '9 AM': 5, '10 AM': 5, '11 AM': 5, '1 PM': 5, '2 PM': 5, '3 PM': 5, '4 PM': 5
  });
  const [isShowing, setIsShowing] = useState(false);
  const [currentSlot, setCurrentSlot] = useState('');

  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsShowing(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleReserve = (time) => {
    setCurrentSlot(time);
    setIsShowing(true);
  };

  const confirmReserve = async () => {
    if (slots[currentSlot] > 0) {
      const newSlots = { ...slots, [currentSlot]: slots[currentSlot] - 1 };
      setSlots(newSlots);
      await updateBackend(currentSlot, newSlots[currentSlot]);
      setIsShowing(false);
    }
  };

  const updateBackend = async (time, newCount) => {
    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date: selectedDate, time, slots: newCount }),
      });

      if (!response.ok) {
        throw new Error('Failed to update reservation');
      }
      console.log("Updated successfully!");
    } catch (error) {
      console.error("Error updating reservation:", error);
    }
  };

  const Modal = () => {
    if (!isShowing) return null;

    return ReactDOM.createPortal(
      <div className="fixed inset-0 z-30 flex items-center justify-center overflow-y-auto text-black bg-black bg-opacity-50">
        <div ref={wrapperRef} className="bg-white rounded shadow-lg max-w-md mx-auto p-4">
          <h2 className="mt-1 text-xl font-bold text-center">Confirm Reservation</h2>
          <p className='mt-2 text-center'>Are you sure you want to reserve the slot at {currentSlot}?</p>
          <div className="flex justify-end space-x-4 mt-4">
            <button className="bg-[#88343B] hover:bg-[#88343B] text-white font-bold py-2 px-4 rounded mb-1" onClick={() => setIsShowing(false)}>Cancel</button>
            <button className="bg-[#F7C301] hover:bg-[#F7C301] text-white font-bold py-2 px-4 rounded mb-1" onClick={confirmReserve}>Confirm</button>
          </div>
        </div>
      </div>,
      document.body
    );
  };

  const handleDateChange = (date) => {
    setSelectedDate(date.format('YYYY-MM-DD'));
  };

  return (
    <div>
      <Studnav />
      <Modal />
      
      <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">

          <div>
            <div className="mx-auto max-w-2xl py-10 text-center">
                <p className="py-5 text-black">Articles</p>
                <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">Choose an Appointment</h2>
                <p className="py-5 text-black">Read our latest blog posts for valuable insights</p>
            </div>
          </div>

          <div className="isolate bg-[#88343B] px-6 py-24 sm:py-32 lg:px-8 rounded-lg">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar value={dayjs(selectedDate)} onChange={handleDateChange} />
            </LocalizationProvider>
            {selectedDate && Object.entries(slots).map(([time, count]) => (
              <div key={time} className="flex justify-between gap-x-6 py-5 rounded-md ">
                <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="text-xs font-semibold leading-6 text-white">{time}</p>
                    <p className="mt-1 font-semibold text-lg leading-5 text-white">{count} slots</p>
                  </div>
                </div>
                <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                  <button className="px-4 py-2 text-sm text-white bg-[#F7C301] hover:bg-[#F7C301] rounded-lg" onClick={() => handleReserve(time)} disabled={count === 0}>Reserve</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div><Studfooter />
    </div>
  );
}

export default App;
