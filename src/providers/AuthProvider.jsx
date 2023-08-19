import React, { createContext } from 'react';
import { auth, firestore } from '@fire/firebase';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  return <AuthContext.Provider value={{ auth, firestore }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
