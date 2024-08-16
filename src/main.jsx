import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './layout/header.jsx'
import Footer from './layout/footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  <Footer/>
  </React.StrictMode>
)
