import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  FaFacebookF,
  FaGithub,
  FaTwitter,
  FaGooglePlusG,
  FaPinterestP,
  FaCopyright,
  FaBars,
} from 'react-icons/fa';
import './nav.css';
import { useUser } from '../userAccess/userContext';

const Navigation = ({ children }) => {
  const [navActive, setNavActive] = useState(false);
  const handleNavActive = () => {
    setNavActive(!navActive);
  };
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };
  const menuItem = [
    {
      path: '/doctors',
      name: 'Doctors',
    },
    {
      path: '/New-reservation',
      name: 'New Reservation',
    },
    {
      path: '/My-reservations',
      name: 'My Reservations',
    },
    {
      path: '/Add-doctor',
      name: 'Add Doctor',
    },
    {
      path: '/Delete-doctor',
      name: 'Delete Doctor',
    },
  ];
  return (
    <>
      <div className="all-container">
        <header>
          <div className="nav-head">
            <div className="nav-logo">
              <h2>BookItNow</h2>
            </div>
            <nav className="side-nav">
              <div>
                {user ? (
                  <div>
                    <p>
                      Welcome,
                      {user.status.data.name}
                    </p>
                  </div>
                ) : (
                  <p>User not logged in.</p>
                )}
              </div>
              <ul>
                {
        menuItem.map((item) => (
          <NavLink to={item.path} key={item.path} className="link" activeclassname="active">
            <div className="link-text">{item.name}</div>
          </NavLink>
        ))
       }
              </ul>
              <div className="nav_socials">
                <FaFacebookF />
                <FaGithub />
                <FaTwitter />
                <FaGooglePlusG />
                <FaPinterestP />
              </div>
              <div className="nav_copyright">
                <FaCopyright />
                <span>Copyright 2023</span>
              </div>
              <div className="logout">
                <button className="logout-btn" type="button" onClick={handleLogout}>Logout</button>
              </div>
            </nav>
          </div>
          <div className="nav-mobile">
            <nav className="mob-nav">
              <div className="mob-header">
                <FaBars onClick={handleNavActive} />
                <h1>BookItNow</h1>
              </div>
              <div className={`mob-container ${navActive ? 'active' : ''}`}>
                <ul className="mob-nav-list">
                  {
        menuItem.map((item) => (
          <NavLink to={item.path} key={item.path} className="link" activeclassname="active" onClick={handleNavActive}>
            <div className="link-text-mob">{item.name}</div>
            <hr />
          </NavLink>
        ))
       }
                </ul>
                <div className="nav_socials-mob">
                  <FaFacebookF />
                  <FaGithub />
                  <FaTwitter />
                  <FaGooglePlusG />
                  <FaPinterestP />
                </div>
                <div className="nav_copyright-mob">
                  <FaCopyright />
                  <span>Copyright 2023</span>
                </div>
                <button className="logout-btn" type="button" onClick={handleLogout}>Logout</button>
              </div>
            </nav>
          </div>
        </header>
        <main className="main-container">
          {children}
          <Outlet />
        </main>
      </div>
    </>
  );
};

Navigation.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Navigation;