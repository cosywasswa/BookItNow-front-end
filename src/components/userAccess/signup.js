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
        const response = await axios.post('http://[::1]:4000/sign_up', { name });
        toast.success('signed up'`${response.status.data.name} signed up`);
        setName('');
      }
    } catch (error) {
      toast.error('Sign-up failed');
      setName('');
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="my-form">
        <div className="input-div">
          <label htmlFor="name" className="name-label">Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" className="name-input" placeholder="Fullname" />
        </div>
        <button type="submit" className="access-btn">Sign_up</button>
      </form>
      <button onClick={() => onFormSwitch('Login')} type="submit" className="signup-login">Have an account? login</button>
    </div>
  );
};

Signup.propTypes = {
  onFormSwitch: PropTypes.func.isRequired,
};

export default Signup;
