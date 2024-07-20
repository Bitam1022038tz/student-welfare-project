import React, { useState } from 'react';
import axios from 'axios';
import './RequestForm.css';

const API_URL = 'http://localhost:8080/api/request';

const createRequest = async (requestData) => {
  try {
    const response = await axios.post(API_URL, requestData);
    return response.data;
  } catch (error) {
    console.error('Error creating request', error);
    throw error;
  }
};

const RequestForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    studentEmail: '',
    requestDate: '',
    requestTime: '',
    requestPurpose: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newRequest = {
      studentNames: formData.fullName,
      studentEmail: formData.studentEmail,
      requestDate: formData.requestDate,
      requestTime: formData.requestTime,
      purpose: formData.requestPurpose,
      status: 'Pending'
    };

    try {
      await createRequest(newRequest);
      alert('Request submitted successfully!');
    } catch (error) {
      alert('Error submitting request');
    }
  };

  return (
    <div className="request-form-container">
      <h2>Send Request</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group-row">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="studentEmail">Your Email</label>
            <input
              type="email"
              id="studentEmail"
              name="studentEmail"
              value={formData.studentEmail}
              onChange={handleChange}
              placeholder="Your Email"
            />
          </div>
        </div>
        <div className="form-group-row">
          <div className="form-group">
            <label htmlFor="requestDate">Request Date</label>
            <input
              type="date"
              id="requestDate"
              name="requestDate"
              value={formData.requestDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="requestTime">Request Time</label>
            <input
              type="time"
              id="requestTime"
              name="requestTime"
              value={formData.requestTime}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="requestPurpose">Request Purpose</label>
          <textarea
            id="requestPurpose"
            name="requestPurpose"
            value={formData.requestPurpose}
            onChange={handleChange}
            placeholder="Request Purpose"
          ></textarea>
        </div>
        <div className="form-group">
          <button type="submit">Submit Request</button>
        </div>
      </form>
    </div>
  );
};

export default RequestForm;
