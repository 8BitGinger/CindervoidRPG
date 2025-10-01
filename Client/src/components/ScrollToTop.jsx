import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // This line tells the browser to scroll the window to the top (0, 0)
    window.scrollTo(0, 0);
    
    // The dependency array ensures this effect runs every time the route changes
  }, [pathname]); 

  // This component renders nothing; it only manages a side effect
  return null; 
};

export default ScrollToTop;