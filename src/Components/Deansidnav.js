// src/Components/Sidenav.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faKey, faPlus, faCog, faSignOutAlt, faClipboardList, faBars, faTimes, faMinus, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import './Sidenav.css';
import { Link } from 'react-router-dom';

const DeanSidenav = () => {
  
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

      <Link to="/deandashboard">
        <FontAwesomeIcon icon={faTachometerAlt} className="icon" />
        {!isCollapsed && <span>Dean Dashboard</span>}
      </Link>
      <Link to="/deanreviewrequests">
        <FontAwesomeIcon icon={faClipboardList} className="icon" />
        {!isCollapsed && <span>Review Request</span>}
      </Link>
      
      <Link to="/view-appointment"> 
        <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
        {!isCollapsed && <span>Appointment List</span>}
      </Link>


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

export default DeanSidenav;








