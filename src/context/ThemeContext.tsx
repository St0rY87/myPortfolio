import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/Theme'; 

type ThemeContextType = {
  dark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

type ThemeProviderPropsType = {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderPropsType> = ({ children }) => {
  const [dark, setDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  const toggleTheme = (): void => {
    setDark((current) => !current);
  };

  useEffect(() => {
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  const currentTheme = dark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      <StyledThemeProvider theme={currentTheme}> 
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};