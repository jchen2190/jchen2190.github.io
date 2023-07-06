import React from 'react';
import './bootstrap/bootstrap.min.css';
import './App.css';
import Navigation from './components/nav';
import Introduction from './components/introduction'
import About from './components/about';
import Skills from './components/skills';
import Experience from './components/experience';
import Projects from './components/project';
import OtherProjects from './components/projectOther';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="container content">
      <header>
        <Navigation />
      </header>
      <main>
        <Introduction />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <OtherProjects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
