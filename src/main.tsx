import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { ContextProvider } from './context/AppContext'
import { AuthProvider } from './context/AuthContext'
import { ThemeProvider } from './context/ThemeContext'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <ContextProvider>
          <App />
        </ContextProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
