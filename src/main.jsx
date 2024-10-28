import React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => <h1>Hello, Vite with React for Essence!</h1>;

const root = createRoot(document.getElementById('root')); // Create a root.
root.render(<App />); // Renders the app.
