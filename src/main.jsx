import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthenticationProvider from './context/AuthenticationProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrapping through AuthenticationProvider context */}
    <AuthenticationProvider>
      <App/>
    </AuthenticationProvider>  
  </StrictMode>
)
