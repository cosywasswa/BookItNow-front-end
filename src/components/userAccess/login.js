import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = ({ onFormSwitch }) => {
  const navigate = useNavigate();
  const handleLoginSuccess = (userData) => {
    localStorage.setItem('user', JSON.stringify(userData));
    window.location.href = '/doctors';
    navigate('/doctors');
  };

  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (name) {
        const response = await axios.post('http://[::1]:4000/login', { name });
        if (response.status === 200) {
          handleLoginSuccess(response.data);
        }
        setName('');
        toast.success('You logged in successfuly');
      }
    } catch (error) {
      toast.error('Login failed', error);
    } finally {
      setLoading(false);
      setName('');
    }
  };
  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit} className="my-form">
        <div className="input-div">
          <label htmlFor="name" className="name-label">Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="name-input" id="name" placeholder="Enter name" />
          <button type="submit" className="access-btn">
            {' '}
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </div>
      </form>
      <button onClick={() => onFormSwitch('Signup')} type="submit" className="signup-login">No account? Sign_up here</button>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

Login.propTypes = {
  onFormSwitch: PropTypes.func.isRequired,
};

export default Login;
