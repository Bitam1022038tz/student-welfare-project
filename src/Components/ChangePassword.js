import React, { useState } from 'react';
import './ChangePassword.css';

const ChangePasswordModal = ({ isOpen, onClose, onChangePassword }) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    onChangePassword(newPassword);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Change Password</h2>
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div className="modal-buttons">
          <button onClick={onClose} className="cancel-button">Cancel</button>
          <button onClick={handleChangePassword} className="change-button">Change</button>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
