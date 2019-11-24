import React, { createContext, useState } from 'react';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const storedUser = sessionStorage.getItem('CURRENT_USER');
  const [currentUser, setCurrentUser] = useState(JSON.parse(storedUser));

  const signIn = ({ user, token }) => {
    setCurrentUser(user);
    sessionStorage.setItem('CURRENT_USER', JSON.stringify(user));
    sessionStorage.setItem('AUTH_TOKEN', token);
  };

  const signOut = _ => {
    setCurrentUser(null);
    sessionStorage.removeItem('CURRENT_USER');
    sessionStorage.removeItem('AUTH_TOKEN');
  };

  return <UserContext.Provider value={{ currentUser, signIn, signOut }}>{children}</UserContext.Provider>;
};
