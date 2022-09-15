import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import './style.css'

const AppLayout = ({ children }) => {
  return <div className='layout-container'>
    <Header />
    <main className='main-content'>
    {children}
    </main>
    <Footer />
  </div>  
}

export default AppLayout;