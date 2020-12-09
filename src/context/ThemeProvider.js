import React, { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

ThemeContext.displayName = 'ThemeContext';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    primaryGreen: '#60D66A',
    lightGray: '#F5F6F7',
    darkGray: '#B3B3B3',
    darkGray2: '#9E9E9E',
    darkGray3: '#85868A',
    lightGreen: '#DCF8C6',
  });

  const context = { theme, setTheme };

  return <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
