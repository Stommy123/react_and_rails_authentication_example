import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

const AuthContainer = ({ children }) => {
  const { currentUser, signIn } = useContext(UserContext);
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleInputChange = field => e => setCredentials({ ...credentials, [field]: e.target.value });

  const authenticate = async _ => {
    const { data: { token, user } = {} } = await axios.post('http://localhost:5000/api/authenticate', credentials);
    signIn({ token, user });
  };

  if (currentUser) return children;
  return (
    <main>
      <h1>Welcome to FakeBook</h1>
      <div className="sign-in-form">
        <div className="form-group">
          <label>Email</label>
          <input type="text" value={credentials.email} onChange={handleInputChange('email')} placeholder="Email" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={credentials.password}
            onChange={handleInputChange('password')}
            placeholder="Password"
          />
        </div>
      </div>
      <button onClick={authenticate}>Sign In</button>
    </main>
  );
};

export default AuthContainer;
