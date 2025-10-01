import React, { useRef, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import './App.css'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer';

const App = () => {
  const contentRef = useRef(null); // 1. Create a ref
  const location = useLocation();

  useEffect(() => {
    // 2. Scroll the specific element to the top when the route changes
    if (contentRef.current) {
      contentRef.current.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <div className="wallpaper">
      <Navbar />
        <ScrollToTop />
        <main ref={contentRef} className='scrollable-content-area'>
        <Outlet />
        </main>

        <Footer />
    </div>
  )
}

export default App
