import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { toast } from 'react-toastify';

const Signup = ({ onFormSwitch }) => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (name) {
        const response = await axios.post('https://bookitnow-kk0q.onrender.com/sign_up', { name });
        toast.success('signed up'`${response.status.data.name} signed up`);
        setName('');
      }
    } catch (error) {
      setName('');
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="my-form">
        <div className="input-div">
          <label htmlFor="name" className="name-label">Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" className="name-input" placeholder="Enter name" />
          <button type="submit" className="access-btn">Sign_up</button>
        </div>
      </form>
      <button onClick={() => onFormSwitch('Login')} type="submit" className="signup-login">Have an account? login here</button>
    </div>
  );
};

Signup.propTypes = {
  onFormSwitch: PropTypes.func.isRequired,
};

export default Signup;
