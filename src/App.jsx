import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';

function App() {
  return (
    <Router basename="/data_nexus">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
