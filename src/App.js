import React from 'react';
import './bootstrap/bootstrap.min.css';
import Nav from './components/nav';
import Introduction from './components/introduction'
import About from './components/about';
import Skills from './components/skills';
import Experience from './components/experience';
import Contact from './components/contact';
import Footer from './components/footer';

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
