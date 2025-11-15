import React, { useEffect } from 'react';
import LandingPage from './LandingPage/LandingPage';
import './LandingPage/LandingPage.css'; 

import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    Aos.init({
        duration: 1000,
        once: true,
    });
  }, []);

  return (
    <LandingPage />
  );
}

export default App;