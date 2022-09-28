import { Spin } from 'antd';
import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../components/firebase/config';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({ displayName, email, uid, photoURL });
        setIsLoading(false);
        navigate('/', { replace: true });
      } else {
        navigate('/login');
      }
    });
    return () => {
      unsubscribed();
    };
  }, [navigate]);

  return <AuthContext.Provider value={user}>{isLoading ? <Spin /> : children}</AuthContext.Provider>;
};

export default AuthProvider;
