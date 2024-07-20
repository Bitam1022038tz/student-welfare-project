import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faKey, faPlus, faCog, faSignOutAlt, faBars, faTimes, faMinus, faPaperPlane, faUsers, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './Sidenav.css';
import { Link } from 'react-router-dom';

import ChangePasswordModal from './ChangePassword';

const AdminSidenav = () => {
 
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleSignOut = () => {
    console.log('Sign out');
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChangePassword = (newPassword) => {
    console.log('New password:', newPassword);
    // Implement your password change logic here
  };

  return (
    <div className={`sidenav ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="toggle-button" onClick={toggleCollapsed}>
        <FontAwesomeIcon icon={isCollapsed ? faBars : faTimes} className="icon" />
      </div>

      <Link to="/Admindashboard">
        <FontAwesomeIcon icon={faTachometerAlt} className="icon" />
        {!isCollapsed && <span>Admin Dashboard</span>}
      </Link>

      <Link to="/manageusers">
        <FontAwesomeIcon icon={faUsers} className="icon" />
        {!isCollapsed && <span>Manage Users</span>}
      </Link>

      <Link to="/managerequests">
        <FontAwesomeIcon icon={faPaperPlane} className="icon" />
        {!isCollapsed && <span>Manage Requests</span>}
      </Link>

      <Link to="/manageappointment">
        <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
        {!isCollapsed && <span>Manage Appointment</span>}
      </Link>

      

      <div className="menu-item" onClick={toggleSettings}>
        <FontAwesomeIcon icon={faCog} className="icon" />
        {!isCollapsed && <span>Settings</span>}
        {!isCollapsed && (isSettingsOpen ? <FontAwesomeIcon icon={faMinus} className="icon-arrow-setting" /> : <FontAwesomeIcon icon={faPlus} className="icon-arrow-setting" />)}
      </div>

      {isSettingsOpen && !isCollapsed && (
        <div className="submenu">
          <div onClick={openModal}>
            <FontAwesomeIcon icon={faKey} className="icon" />
            <span>Change Password</span>
          </div>
          {/* Add more settings links here */}
        </div>
      )}

      <div className="menu-item sign-out" onClick={handleSignOut}>
        <Link to="/">
          <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
          {!isCollapsed && <span>Sign Out</span>}
        </Link>
      </div>

      <ChangePasswordModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onChangePassword={handleChangePassword}
      />
    </div>
  );
};

export default AdminSidenav;
