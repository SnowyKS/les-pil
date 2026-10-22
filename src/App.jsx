import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Lumber from './components/Lumber/Lumber';
import Contacts from './components/Contacts/Contacts';
import Privacy from './components/Privacy/Privacy';
import TermsOfUse from './components/TermsOfUse/TermsOfUse';
import { useMetrika } from './metrika';
import './App.scss';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useMetrika();

  return (
      <div className="App">
        <Header 
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lumber" element={<Lumber />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
          </Routes>
        </main>
      </div>
  );
}

export default App;