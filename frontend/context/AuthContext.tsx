// context/AuthContext.tsx
'use client';

import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface User {
  username: string;
  email: string;
  password: string;
}

interface Address {
  street?: string;
  city?: string;
  zip?: string;
  [key: string]: any;
}

interface AuthContextType {
  isLogin: boolean;
  user: User | null;
  address: Address | null;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  updatePassword: (newPassword: string) => Promise<void>;
  currentAddress: () => Promise<void>;
  addAddress: (newAddress: Address) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [address, setAddress] = useState<Address | null>(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:3000/account/protected', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (data && data.user) {
          setIsLogin(true);
          setUser({
            username: data.user.username,
            email: data.user.email,
            password: data.user.password,
          });
          currentAddress();
        } else {
          setIsLogin(false);
          setUser(null);
          setAddress(null);
        }
      } catch (error) {
        console.error('Giriş kontrolü başarısız', error);
        setIsLogin(false);
        setUser(null);
        setAddress(null);
      }
    };

    checkLoginStatus();
  }, []);

  const updatePassword = async (newPassword: string) => {
    if (!user) return;

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3000/account/updatePassword', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          email: user.email,
          newPassword,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setUser(prev => (prev ? { ...prev, password: newPassword } : null));
        console.log('Şifre güncellendi');
      } else {
        console.error('Şifre güncellenemedi:', data.message);
      }
    } catch (error) {
      console.error('Şifre güncelleme hatası:', error);
    }
  };

  const currentAddress = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3000/account/getAddress', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (data.address) setAddress(data.address);
    } catch (error) {
      console.error('Adres alınamadı:', error);
    }
  };

  const addAddress = async (newAddress: Address) => {
    if (!user) return;

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:3000/account/addAddress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          email: user.email,
          address: newAddress,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setAddress(newAddress);
        console.log('Adres eklendi');
      } else {
        console.error('Adres eklenemedi:', data.message);
      }
    } catch (error) {
      console.error('Adres eklenirken hata:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isLogin, user, address, setIsLogin, setUser, updatePassword, currentAddress, addAddress }}>
      {children}
    </AuthContext.Provider>
  );
};