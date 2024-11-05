import React from 'react';

const BookingForm = ({ formData, availableTimes, handleInputChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label htmlFor="time">Time</label>
        <select
          id="time"
          name="time"
          value={formData.time}
          onChange={handleInputChange}
          required
        >
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="guests">Number of Guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleInputChange}
          min="1"
          required
        />
      </div>

      <div>
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleInputChange}
        >
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="casual">Casual</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button type="submit">Submit Reservation</button>
    </form>
  );
};

export default BookingForm;
