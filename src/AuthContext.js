import React, { useState, useEffect } from 'react';
import { auth } from './Firebase';

export const AuthContext = React.createContext();

export const AuthContextProvider = props => {

  const [ user, setUser ] = useState();

  useEffect(() => {
    auth.onAuthStateChanged(val => {
      setUser(val);
    });
  }, []);
  
  return(
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  )
}