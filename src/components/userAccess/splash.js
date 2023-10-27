import React, { useState } from 'react';
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
      {
      currentForm === 'Login' ? <Login onFormSwitch={toggleForm} /> : <Signup onFormSwitch={toggleForm} />
    }
    </section>
  );
};

export default Splash;
