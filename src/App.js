
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/footer';
import Skills from './components/Skills';
import Certificates from './components/Certificates';

function App() {
  return (
    <div className="App">
       <Header/>
       <Hero />
       <About />
       <Skills />
       <Projects />
       <Certificates/>
       <Resume />
       <Contact />
       <Footer />

    </div>
  );
}

export default App;
