import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BasketContextProvider} from './contexts/BasketContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BasketContextProvider>
      <App />
    </BasketContextProvider>
  </React.StrictMode>,
)
