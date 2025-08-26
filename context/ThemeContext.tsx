import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Appearance } from 'react-native';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (mode: ThemeMode) => void;
  isDarkMode: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'system',
  setTheme: () => {},
  isDarkMode: false,
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeMode>('system');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const saved = await AsyncStorage.getItem('@theme');
        if (saved && ['light', 'dark', 'system'].includes(saved)) {
          setTheme(saved as ThemeMode);
        }
      } catch (e) {
        console.warn('Failed to load theme');
      }
    };
    loadTheme();
  }, []);

  useEffect(() => {
    const onChange = () => {
      const colorScheme = Appearance.getColorScheme();
      if (theme === 'system') {
        setIsDarkMode(colorScheme === 'dark');
      }
    };

    const subscription = Appearance.addChangeListener(onChange);
    return () => subscription?.remove?.();
  }, [theme]);

  useEffect(() => {
    const colorScheme = Appearance.getColorScheme();
    const effectiveTheme = theme === 'system' ? colorScheme : theme;
    setIsDarkMode(effectiveTheme === 'dark');
  }, [theme]);

  const handleSetTheme = async (newMode: ThemeMode) => {
    setTheme(newMode);
    try {
      await AsyncStorage.setItem('@theme', newMode);
    } catch (e) {
      console.warn('Failed to save theme');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};