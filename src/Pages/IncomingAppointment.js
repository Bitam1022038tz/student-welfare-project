import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Appointmentlist.css';

const API_URL = 'http://localhost:8080/api/appointments'; // Ensure this matches the backend endpoint

const IncomingAppointment = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get(API_URL);
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching appointments', error);
    }
  };

  const handleCancelAppointment = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setAppointments(appointments.filter(appointment => appointment.id !== id));
    } catch (error) {
      console.error('Error cancelling appointment', error);
    }
  };

  return (
    <div className="appointment-list-container">
      <h2>Incoming Appointment List</h2>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Role</th>
            <th>Date</th>
            <th>Time</th>
            <th>Office Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => (
            <tr key={appointment.id}>
              <td>{appointment.fullName}</td>
              <td>{appointment.role}</td>
              <td>{appointment.appointmentDate}</td>
              <td>{appointment.appointmentTime}</td>
              <td>{appointment.officeLocation}</td>
              <td>
                <button className="cancel-button" onClick={() => handleCancelAppointment(appointment.id)}>
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IncomingAppointment;
