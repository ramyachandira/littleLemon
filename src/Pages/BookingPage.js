import React, { useState, useEffect } from 'react';
import BookingForm from './BookingForm';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: 'birthday',
  });

  const [availableTimes, setAvailableTimes] = useState([]);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  // Simulate fetching available times from an API when the page loads
  useEffect(() => {
    const fetchAvailableTimes = () => {
      return ['18:00', '19:00', '20:00', '21:00'];
    };

    const times = fetchAvailableTimes();
    setAvailableTimes(times);
    
    // Optionally, set an initial time from available times
    if (times.length > 0) {
      setFormData((prevData) => ({
        ...prevData,
        time: times[0], 
      }));
    }
  }, []); 
  
  // Handle input change and update state
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Simulate form submission
    setConfirmationMessage(`Reservation Submitted: 
      Date: ${formData.date} 
      Time: ${formData.time} 
      Guests: ${formData.guests} 
      Occasion: ${formData.occasion}`);

    // Reset form data after submission
    setFormData({
      date: '',
      time: availableTimes[0] || '',
      guests: 1,
      occasion: 'birthday',
    });
  };

  return (
    <div>
      <h1>Book a Table</h1>

      {/* Show confirmation message if reservation was submitted */}
      {confirmationMessage && <div className="confirmation">{confirmationMessage}</div>}

      <BookingForm
        formData={formData}
        availableTimes={availableTimes}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default BookingPage;
