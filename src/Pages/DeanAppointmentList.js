import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Appointmentlist.css';

const API_URL = 'http://localhost:8080/api/appointments';

const DeanAppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [editedAppointmentDate, setEditedAppointmentDate] = useState('');
  const [editedAppointmentTime, setEditedAppointmentTime] = useState('');
  const [editingAppointmentId, setEditingAppointmentId] = useState(null);

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

  const handleEditAppointment = (id) => {
    const appointmentToEdit = appointments.find(appointment => appointment.id === id);
    if (appointmentToEdit) {
      setEditingAppointmentId(id);
      setEditedAppointmentDate(appointmentToEdit.appointmentDate);
      setEditedAppointmentTime(appointmentToEdit.appointmentTime);
      // You can also open a modal or show a form here for editing
    }
  };

  const handleSaveAppointment = async () => {
    try {
      await axios.put(`${API_URL}/${editingAppointmentId}`, {
        appointmentDate: editedAppointmentDate,
        appointmentTime: editedAppointmentTime
      });
      // Refresh appointments after edit
      fetchAppointments();
      // Reset edit state
      setEditingAppointmentId(null);
      setEditedAppointmentDate('');
      setEditedAppointmentTime('');
    } catch (error) {
      console.error('Error updating appointment', error);
    }
  };

  const handleCancelEdit = () => {
    setEditingAppointmentId(null);
    setEditedAppointmentDate('');
    setEditedAppointmentTime('');
  };

  return (
    <div className="appointment-list-container">
      <h2>Appointment List</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Office Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map(appointment => (
            <tr key={appointment.id}>
              <td>{appointment.appointmentDate}</td>
              <td>{appointment.appointmentTime}</td>
              <td>{appointment.officeLocation}</td>
              <td>
                <div className='appoint-button'>
                  <button className="cancel-button" onClick={() => handleCancelAppointment(appointment.id)}>
                  Cancel
                </button>
                {/* Edit Button */}
                <button className="edit-button" onClick={() => handleEditAppointment(appointment.id)}>
                  Edit
                </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Form/Modal */}
      {editingAppointmentId && (
        <div className="edit-form-container">
          <h3>Edit Appointment</h3>
          <div className="edit-form-group">
          <label>Date:</label>
          <input
            type="text"
            value={editedAppointmentDate}
            onChange={(e) => setEditedAppointmentDate(e.target.value)}
          />
          </div>
          <div className="edit-form-group">
          <label>Time:</label>
          <input
            type="text"
            value={editedAppointmentTime}
            onChange={(e) => setEditedAppointmentTime(e.target.value)}
          />
          </div>
          <div className="edit-form-buttons">
            <button className='save-button' onClick={handleSaveAppointment}>Save</button>
            <button className='cancel-button' onClick={handleCancelEdit}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeanAppointmentList;
