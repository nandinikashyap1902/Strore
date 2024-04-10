// import { useContext,createContext } from 'react'

// export const DataProvider = createContext();
// export const useProductData = () => useContext(DataProvider);
// Context.js
import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [Item, setItem] = useState(null);

  return (
    <DataContext.Provider value={{ Item, setItem }}>
      {children}
    </DataContext.Provider>
  );
};

export const useProductData = () => useContext(DataContext);
