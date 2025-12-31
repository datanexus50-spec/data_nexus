import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Reviews from './components/sections/Reviews';
import Contact from './components/sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Reviews />
      <Contact />
    </Layout>
  );
}

export default App;
