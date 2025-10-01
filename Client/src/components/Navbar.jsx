import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PiCastleTurretDuotone, PiInfoDuotone, PiEnvelopeOpenDuotone } from "react-icons/pi";
import { GiWorld } from "react-icons/gi";
import PlayMe from './PlayMe';
import { FaDiceD20 } from "react-icons/fa";


import { FaHome, FaInfoCircle, FaEnvelope, FaDAndD, FaApple } from 'react-icons/fa';
import '../assets/styles/navbar.css'; // Assuming you have a CSS file for styling

const Navbar = () => {
  const location = useLocation();
  const [activeIcon, setActiveIcon] = useState('');

  // This useEffect hook updates the activeIcon state whenever the route changes
  useEffect(() => {
    setActiveIcon(location.pathname);
  }, [location.pathname]);

  const getIconColor = (path) => {
    return activeIcon === path ? 'blue' : '#000000ff'; // Highlight color vs. default color
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="nav-link">
          <PiCastleTurretDuotone size={24} color={getIconColor('/')} />
          <span style={{ color: getIconColor('/') }}>Home</span>
        </Link>
        <Link to="/about" className="nav-link">
          <PiInfoDuotone size={24} color={getIconColor('/about')} />
          <span style={{ color: getIconColor('/about') }}>About</span>
        </Link>
        <Link to="/sphere" className="nav-link">
          <GiWorld size={24} color={getIconColor('/sphere')} />
          <span style={{ color: getIconColor('/sphere') }}>The Sphere</span>
        </Link>
        <Link to="/how-to-play" className="nav-link">
          <FaDiceD20 size={24} color={getIconColor('/how-to-play')} />
          <span style={{ color: getIconColor('/how-to-play') }}>How To Play</span>
        </Link>
        {/* <Link to="/game-masters" className="nav-link">
          <FaDAndD size={24} color={getIconColor('/game-masters')} />
          <span style={{ color: getIconColor('/game-masters') }}>Game Masters</span>
        </Link> */}
        <Link to="/contact" className="nav-link">
          <PiEnvelopeOpenDuotone size={24} color={getIconColor('/contact')} />
          <span style={{ color: getIconColor('/contact') }}>Contact</span>
        </Link>

        <PlayMe />
      </div>
    </nav>
  );
};

export default Navbar;