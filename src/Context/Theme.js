import React from 'react'
import { createContext, useContext } from 'react'
// theme context 
export const ThemeContext = createContext({

    themeMode: "light",
    darkMode: () => {},
    lightMode: () => {},

})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}


