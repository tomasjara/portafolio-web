import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'
import { clarity } from 'react-microsoft-clarity';

if (import.meta.env.PROD) {
  clarity.init('rxdujptki2');
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
