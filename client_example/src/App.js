import React, { useState } from 'react';
import axios from 'axios';

const App = _ => {
  const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });

  const handleInputChange = field => e => setUserCredentials({ ...userCredentials, [field]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('submiting!', userCredentials)
    const { data } = await axios.post('/api/user_token', { auth: { email: 'tommy@tommy.com', password: 'password' } }, { headers: { 'Content-Type': 'application/json' } })
    console.log('data', data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>email</label>
        <input type="text" onChange={handleInputChange('email')} value={userCredentials.email} />
      </div>
      <div className="form-group">
        <label>password</label>
        <input type="text" onChange={handleInputChange('password')} value={userCredentials.password} />
      </div>
      <input type="submit" value="login" />
    </form>
  )
}

export default App;
