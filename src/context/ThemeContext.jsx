
"use client"

import { createContext, useState, useContext, useEffect } from "react"
import { ThemeProvider as MUIThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"


const ThemeContext = createContext()

//theme provider to check default settings
export const ThemeProvider = ({ children }) => {
  
  const [themeMode, setThemeMode] = useState("light")
  
 
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      setThemeMode(savedTheme)
    } else {
      
      const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
      setThemeMode(prefersDarkMode ? "dark" : "light")
      localStorage.setItem("theme", prefersDarkMode ? "dark" : "light")
    }
  }, [])
  
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeMode)
  }, [themeMode])
  
  
  const theme = createTheme({
    palette: {
      mode: themeMode,
      ...(themeMode === 'light'
        ? {
            // Light
            primary: {
              main: "#2196f3",
              light: "#64b5f6",
              dark: "#1976d2",
              contrastText: "#fff",
            },
            secondary: {
              main: "#f50057",
              light: "#ff4081",
              dark: "#c51162",
              contrastText: "#fff",
            },
            background: {
              default: "#f5f5f5",
              paper: "#fff",
            },
          }
        : {
            // Dark 
            primary: {
              main: "#90caf9",
              light: "#e3f2fd",
              dark: "#42a5f5",
              contrastText: "#000",
            },
            secondary: {
              main: "#f48fb1",
              light: "#f8bbd0",
              dark: "#c2185b",
              contrastText: "#000",
            },
            background: {
              default: "#121212",
              paper: "#1e1e1e",
            },
          }),
    },
  })

  
  const toggleTheme = () => {
    const newTheme = themeMode === "light" ? "dark" : "light"
    setThemeMode(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  )
}


export const useTheme = () => useContext(ThemeContext)