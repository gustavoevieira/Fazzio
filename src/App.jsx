// src/App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Componentes globais que aparecem em todas as páginas
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Topbar from './components/Topbar'

// As novas páginas
import HomePage from './pages/HomePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import ProbluePage from './pages/ProbluePage';
import CorteCloudPage from './pages/CorteCloudPage';
import SobrePage from './pages/SobrePage';

import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <Topbar />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/problue" element={<ProbluePage />} />
          <Route path="/Cortecloud" element={<CorteCloudPage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/Policy" element={<PrivacyPolicyPage />} />

        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </BrowserRouter>
  );
};

export default App;