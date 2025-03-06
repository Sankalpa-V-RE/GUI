import React, { useState } from 'react';
import styles from './SignUp.module.css';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess(false);
    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: name,
          email,
          password
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Signup failed. Please try again.');
      }

      // Reset form
      setName('');
      setEmail('');
      setPassword('');
      setSuccess(true);
      console.log('Signup successful:', data);
    } catch (error) {
      setError(error.message);
      console.error('Signup error:', error);
    } finally {
      setIsSubmitting(false);
    }
    //after authentication
    window.dispatchEvent(new Event('storage'));

    // localStorage set
    localStorage.setItem('user', JSON.stringify(data));
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sign Up</h1>
      {success && (
        <div className={styles.successMessage}>
           Signup successful! You can now login.
        </div>
      )}
      {error && (
        <div className={styles.errorMessage}>
           {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            placeholder='Enter your Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={styles.input}
            disabled={isSubmitting}
          />
        </div>
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
          {isSubmitting ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
}

export default SignUp;