import React, { useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Banner from './components/Banner';
import Services from './components/Services';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const servicesRef = useRef(null);
  const [activeTab, setActiveTab] = useState('first');

  const scrollToService = (tab) => {
    setActiveTab(tab);
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Navbar />
      <Banner
        onBookClick={() => scrollToService('first')}
        onPlanClick={() => scrollToService('second')}
      />
      <Services ref={servicesRef} activeTab={activeTab} />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

