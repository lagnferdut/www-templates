import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PersonalPage from './PersonalPage.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersonalPage />
  </React.StrictMode>
)
