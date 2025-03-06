import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess(false);
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed. Please check your credentials.');
      }

      console.log('Login successful:', data);
      setSuccess(true);
      
      localStorage.setItem('user', JSON.stringify(data));
      
      // Redirect after 1.5 seconds to show success message
      setTimeout(() => {
        navigate('/');
      }, 1500);

    } catch (error) {
      setError(error.message);
      console.error('Login error:', error);
    } finally {
      setIsSubmitting(false);
    }
    // successful authentication
    window.dispatchEvent(new Event('storage'));

    // localStorage set
    localStorage.setItem('user', JSON.stringify(data));
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login</h1>
      {success && (
        <div className={styles.successMessage}>
           Login successful! Redirecting to home...
        </div>
      )}
      {error && (
        <div className={styles.errorMessage}>
           {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
            disabled={isSubmitting}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.input}
            disabled={isSubmitting}
          />
        </div>
        <button 
          type="submit" 
          className={styles.button}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}

export default Login;