import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CourseProvider } from './contexts/courseContext' // Import the provider


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CourseProvider>
      <App />
    </CourseProvider>
  </StrictMode>,
)
