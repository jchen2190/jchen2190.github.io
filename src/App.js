import React from 'react';
import './public/bootstrap/bootstrap.min.css';
import Nav from './nav';
import Introduction from './introduction'
import About from './about';
import Experience from './experience';
import Contact from './contact';
import Footer from './footer';

function App() {
  return (
    <body data-bs-spy="scroll" data-bs-target="#navbarNav">
      <header>
        <Nav />
      </header>
      <main>
        <Introduction />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </body>
  );
}

export default App;
