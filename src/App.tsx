import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatIs from './components/WhatIs';
import Identify from './components/Identify';
import Prevention from './components/Prevention';
import Action from './components/Action';
import AIChat from './components/AIChat';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <WhatIs />
      <Identify />
      <Prevention />
      <Action />
      <AIChat />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;