import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      setUser({ token });
    }
  }, []);

  const login = (token, expire) => {
    localStorage.setItem('accessToken', token);
    localStorage.setItem('expire', expire);
    setUser({ token });
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('expire');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
