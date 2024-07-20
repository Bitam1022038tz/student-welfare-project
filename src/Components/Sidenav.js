// src/Components/Sidenav.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faKey, faEye,faCalendarAlt, faPlus, faCog, faSignOutAlt, faBars, faTimes, faMinus, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './Sidenav.css';
import { Link } from 'react-router-dom';


const Sidenav = () => {
  const [isAdvancedOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);


  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleSignOut = () => {
    console.log('Sign out');
  };

  return (
    <div className={`sidenav ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="toggle-button" onClick={toggleCollapsed}>
        <FontAwesomeIcon icon={isCollapsed ? faBars : faTimes} className="icon" />
      </div>

      <Link to="/dashboard">
        <FontAwesomeIcon icon={faTachometerAlt} className="icon" />
        {!isCollapsed && <span>Dashboard</span>}
      </Link>
      
      <Link to="/send-request">
        <FontAwesomeIcon icon={faPaperPlane} className="icon" />
        {!isCollapsed && <span>Send Request</span>}
      </Link>

      <Link to="/view-requests">
        <FontAwesomeIcon icon={faEye} className="icon" />
        {!isCollapsed && <span>View Status</span>}

      </Link>

      <Link to="/incoming-appointment"> 
        <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
        {!isCollapsed && <span>Incoming Appointment</span>}
      </Link>

      {isAdvancedOpen && !isCollapsed && (
        <div className="submenu">
          {/* Add links to appointment-related features here */}
        </div>
      )}

      

      <div className="menu-item" onClick={toggleSettings}>
        <FontAwesomeIcon icon={faCog} className="icon" />
        {!isCollapsed && <span>Settings</span>}
        {!isCollapsed && (isSettingsOpen ? <FontAwesomeIcon icon={faMinus} className="icon-arrow-setting" /> : <FontAwesomeIcon icon={faPlus} className="icon-arrow-setting" />)}
      </div>

      {isSettingsOpen && !isCollapsed && (
        <div className="submenu">
          <Link to="/change-password">
            <FontAwesomeIcon icon={faKey} className="icon" />
            <span>Change Password</span>
          </Link>
          {/* Add more settings links here */}
        </div>
      )}

      <div className="menu-item sign-out" onClick={handleSignOut}>
      <Link to="/">
        <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
        {!isCollapsed && <span>Sign Out</span>}
      </Link>
      </div>
    </div>
  );
};

export default Sidenav;








