import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ManageRequests.css';

const API_URL = 'http://localhost:8080/api/request';

const ManageRequests = () => {
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


  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setRequests(requests.filter(request => request.id !== id));
    } catch (error) {
      console.error('Error deleting request', error);
    }
  };

  return (
    <div className="manage-requests-container">
      <h2>Manage Requests</h2>
      <table>
        <thead>
          <tr>
            <th>Student Names</th>
            <th>Student Email</th>
            <th>Request Date</th>
            <th>Request Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(request => (
            <tr key={request.id}>
              <td>{request.studentNames}</td>
              <td>{request.studentEmail}</td>
              <td>{request.requestDate}</td>
              <td>{request.requestTime}</td>
              <td className="actions">
                
                <button className="delete-button" onClick={() => handleDelete(request.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageRequests;
