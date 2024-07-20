import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Deanrequestreview.css';

const API_URL = 'http://localhost:8080/api/request';

const DeanReviewRequests = () => {
  const [requests, setRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [replyMessage, setReplyMessage] = useState('');
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState('');
  const [appointmentDetails, setAppointmentDetails] = useState({
    fullName: '',
    role: '',
    appointmentDate: '',
    appointmentTime: '',
    officeLocation: '',
  });

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const response = await axios.get(API_URL);
      setRequests(response.data);
    } catch (error) {
      console.error('Error fetching requests', error);
    }
  };

  const handleReply = (request) => {
    setSelectedRequest({ ...request, action: 'reply' });
    setFullName(request.studentNames);
    setRole('');
    setReplyMessage('');
  };

  const handleAppointment = (request) => {
    setSelectedRequest({ ...request, action: 'appointment' });
    setAppointmentDetails({
      fullName: request.studentNames,
      role: '',
      appointmentDate: '',
      appointmentTime: '',
      officeLocation: '',
    });
  };

  const handleSendReply = async () => {
    if (!selectedRequest) {
      console.error('No selected request');
      return;
    }

    console.log('Sending reply...');
    console.log('fullName:', fullName);
    console.log('role:', role);
    console.log('message:', replyMessage);
    
    try {
      console.log('Reply sent successfully');
      setSelectedRequest(null);
      setFullName('');
      setRole('');
      setReplyMessage('');
      fetchRequests();
    } catch (error) {
      console.error('Error sending reply', error);
    }
  };

  const handleSendAppointment = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/appointments', {
        ...appointmentDetails,
        status: 'approved', // Update status to 'approved' upon appointment
      });
      console.log('Appointment created:', response.data);
      setSelectedRequest(null);
      setAppointmentDetails({
        fullName: '',
        role: '',
        appointmentDate: '',
        appointmentTime: '',
        officeLocation: '',
      });
      fetchRequests();
    } catch (error) {
      console.error('Error sending appointment', error);
    }
  };

  const handleCancelAction = () => {
    setSelectedRequest(null);
    setReplyMessage('');
    setFullName('');
    setRole('');
    setAppointmentDetails({
      fullName: '',
      role: '',
      appointmentDate: '',
      appointmentTime: '',
      officeLocation: '',
    });
  };

  return (
    <div className="review-requests-container">
      <h2>Review Requests</h2>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Student Email</th>
            <th>Request Date</th>
            <th>Request Time</th>
            <th>Request Purpose</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td>{request.studentNames}</td>
              <td>{request.studentEmail}</td>
              <td>{request.requestDate}</td>
              <td>{request.requestTime}</td>
              <td>{request.purpose}</td>
              <td>
                <button className="reply-button" onClick={() => handleReply(request)}>
                  Reply
                </button>
                <button className="appointment-button" onClick={() => handleAppointment(request)}>
                  Make Appointment
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedRequest && selectedRequest.action === 'reply' && (
        <div className="form-container">
          <h3>Reply to {selectedRequest.studentNames}</h3>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <input
              type="text"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="replyMessage">Message</label>
            <textarea
              id="replyMessage"
              placeholder="Enter message"
              value={replyMessage}
              onChange={(e) => setReplyMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="form-buttons">
            <button className="send-button" onClick={handleSendReply}>
              Send Reply
            </button>
            <button className="cancel-button" onClick={handleCancelAction}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {selectedRequest && selectedRequest.action === 'appointment' && (
        <div className="form-container">
          <h3>Make Appointment with {selectedRequest.studentNames}</h3>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={appointmentDetails.fullName}
              onChange={(e) => setAppointmentDetails({ ...appointmentDetails, fullName: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <input
              type="text"
              id="role"
              value={appointmentDetails.role}
              onChange={(e) => setAppointmentDetails({ ...appointmentDetails, role: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="appointmentDate">Appointment Date</label>
            <input
              type="date"
              id="appointmentDate"
              value={appointmentDetails.appointmentDate}
              onChange={(e) => setAppointmentDetails({ ...appointmentDetails, appointmentDate: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="appointmentTime">Appointment Time</label>
            <input
              type="time"
              id="appointmentTime"
              value={appointmentDetails.appointmentTime}
              onChange={(e) => setAppointmentDetails({ ...appointmentDetails, appointmentTime: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="officeLocation">Office Location</label>
            <input
              type="text"
              id="officeLocation"
              placeholder="Enter office location"
              value={appointmentDetails.officeLocation}
              onChange={(e) => setAppointmentDetails({ ...appointmentDetails, officeLocation: e.target.value })}
            />
          </div>
          <div className="form-buttons">
            <button className="send-button" onClick={handleSendAppointment}>
              Send Appointment
            </button>
            <button className="cancel-button" onClick={handleCancelAction}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeanReviewRequests;
