import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ManageAppointment.css';

const API_URL = 'http://localhost:8080/api/appointments';

const ManageAppointments = () => {
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

  const handleDelete = async (appointmentId) => {
    try {
      await axios.delete(`${API_URL}/${appointmentId}`);
      setAppointments(appointments.filter((appointment) => appointment.id !== appointmentId));
    } catch (error) {
      console.error('Error deleting appointment', error);
    }
  };


  return (
    <div className="manage-appointments-container">
      <h2>Manage Appointments</h2>
      <table>
        <thead>
          <tr>
            <th>Role</th>
            <th>Full Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.role}</td>
              <td>{appointment.fullName}</td>
              <td>{appointment.appointmentDate}</td>
              <td>{appointment.appointmentTime}</td>
              
              <td>
               
                <button className="delete-button1" onClick={() => handleDelete(appointment.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAppointments;
