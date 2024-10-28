import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'; // Ensure correct path to your App component

// Get the root element
const container = document.getElementById('root');

// Create the root only once
const root = createRoot(container);

// Render the App wrapped in React.StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
