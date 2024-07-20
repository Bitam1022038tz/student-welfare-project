// src/Pages/RequestList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RequestList.css';

const API_URL = 'http://localhost:8080/api/request';

const RequestList = () => {
  const [requests, setRequests] = useState([]);

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

  const handleCancelRequest = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setRequests(requests.filter(request => request.id !== id));
    } catch (error) {
      console.error('Error cancelling request', error);
    }
  };

  return (
    <div className="request-list-container">
      <div className="request-table">
        <h2>Request List</h2>
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Full Name</th>
              <th>Request Date</th>
              <th>Request Time</th>
              <th>Request Purpose</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map(request => (
              <tr key={request.id}>
                <td>{request.studentEmail}</td>
                <td>{request.studentNames}</td>
                <td>{request.requestDate}</td>
                <td>{request.requestTime}</td>
                <td>{request.purpose}</td>
                <td>{request.status}</td>
                <td>
                  <button className='cancel-button' onClick={() => handleCancelRequest(request.id)}>Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestList;
