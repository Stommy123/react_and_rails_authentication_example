import React from 'react';
import { UserProvider } from './context/UserContext';
import { NavBar, AuthContainer, Profile } from './components';

const App = _ => (
  <UserProvider>
    <NavBar />
    <AuthContainer>
      <Profile />
    </AuthContainer>
  </UserProvider>
)

export default App;
