'use client';

import React, { createContext, useEffect, useState, ReactNode } from 'react';

interface CardItem {
  id: string | number;
  name: string;
  price: {
    newPrice: number;
    [key: string]: any;
  };
  quantity?: number;
  img?: {
    singleImage?: string;
    [key: string]: any;
  };
  [key: string]: any;
}

interface CardContextType {
  cardItems: CardItem[];
  addToCard: (item: CardItem) => void;
  removeFromCard: (itemId: string | number) => void;
  clearCard: () => void;
}

export const CardContext = createContext<CardContextType>({ 
  cardItems: [], 
  addToCard: () => {}, 
  removeFromCard: () => {}, 
  clearCard: () => {} 
});

interface CardProviderProps {
  children: ReactNode;
}

export const CardProvider: React.FC<CardProviderProps> = ({ children }) => {
  const [cardItems, setCardItems] = useState<CardItem[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedItems = localStorage.getItem('cardItems');
      if (storedItems) {
        setCardItems(JSON.parse(storedItems));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cardItems', JSON.stringify(cardItems));
    }
  }, [cardItems]);

  const addToCard = (newItem: CardItem) => {
    setCardItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === newItem.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === newItem.id
            ? { ...item, quantity: (item.quantity || 1) + (newItem.quantity || 1) }
            : item
        );
      } else {
        return [...prevItems, { ...newItem, quantity: newItem.quantity || 1 }];
      }
    });
  };

  const removeFromCard = (itemId: string | number) => {
    setCardItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  const clearCard = () => {
    setCardItems([]);
  };

  return (
    <CardContext.Provider value={{ cardItems, addToCard, removeFromCard, clearCard }}>
      {children}
    </CardContext.Provider>
  );
};
