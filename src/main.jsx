import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { StepContext } from './ThreeStepForm/StepContext';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter as Router, Routes, Route , Navigate } from 'react-router-dom';
import React from 'react';

createRoot(document.getElementById('root')).render(
  
    
    <StrictMode> 
      <Router>
        <Routes>
        <Route path="/" element={<Navigate to="/three-step-form" />} />
        <Route path="/three-step-form" element={<StepContext></StepContext>} />
         
        </Routes>
      </Router>
         
    </StrictMode>
    
    
 
    
)
