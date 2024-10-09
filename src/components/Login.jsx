import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      if (isLogin) {
        await login(email, password);
      } else {
        await signup(email, password);
      }
      navigate('/');
    } catch (error) {
      setError(isLogin ? 'Failed to log in' : 'Failed to sign up');
      console.error(error);
    }

    setLoading(false);
  }

  return (
    <div className="container">
      <h2>{isLogin ? 'Log In' : 'Sign Up'}</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Email"
            required 
          />
        </div>
        <div>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password"
            required 
          />
        </div>
        <button className="btn btn-primary" disabled={loading} type="submit">
          {isLogin ? 'Log In' : 'Sign Up'}
        </button>
      </form>
      <p>
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <button className="btn btn-secondary" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Sign Up' : 'Log In'}
        </button>
      </p>
    </div>
  );
}