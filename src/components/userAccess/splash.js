import React, { useState } from 'react';
import { FaHospitalUser } from 'react-icons/fa';
import Login from './login';
import Signup from './signup';
import './access.css';

const Splash = () => {
  const [currentForm, setCurrentForm] = useState('Login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <section className="screen-container">
      <div className="logo-div">
        <h1 className="splash-logo">
          <FaHospitalUser className="hospital" />
          BookItNow
        </h1>
      </div>
      {
      currentForm === 'Login' ? <Login onFormSwitch={toggleForm} /> : <Signup onFormSwitch={toggleForm} />
    }
    </section>
  );
};

export default Splash;
