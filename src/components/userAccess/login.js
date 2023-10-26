import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Login = ({ onFormSwitch }) => {
  const [name, setName] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://[::1]:4000/login', { name });
      console.log('Loged-in successful:', response.data);
      setName('');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="my-form">
        <div className="input-div">
          <label htmlFor="name" className="name-label">Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="name-input" id="name" />
        </div>
        <button type="submit" className="access-btn">login</button>
      </form>
      <button onClick={() => onFormSwitch('Signup')} type="submit">No account? Sign_up here</button>
    </div>
  );
};

Login.propTypes = {
  onFormSwitch: PropTypes.func.isRequired,
};

export default Login;
