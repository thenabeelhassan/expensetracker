import React from 'react';
import './App.css';

import { Header } from './sections/header'
import { Body } from './sections/body'
import { Footer } from './sections/footer'

import { GlobalProvider } from './context/globalContext';

function App() {
  return (
    <section>
      <GlobalProvider>
        <Header />
        <Body />
        <Footer />
      </GlobalProvider>
    </section>
  );
}

export default App;
