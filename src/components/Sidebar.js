import React from 'react';
// import { FaHome, FaUsers, FaCalendarAlt, FaNewspaper, FaCamera } from 'react-icons/fa';
import './Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        
        <li>
          <Link to="/events" className="sidebar-link">
            {/* <FaCalendarAlt className="icon"/> */}
            <span className="tooltip">Мероприятия</span>
          </Link>
        </li>

        <li>
          <Link to="/camera" className="sidebar-link">
            {/* <FaCamera className="icon"/> */}
            <span className="tooltip">Камера</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

