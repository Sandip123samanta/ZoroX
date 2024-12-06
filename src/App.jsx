import LenisSmoothScroll from './components/LenisSmoothScroll';
import About from './components/About';
import Hero from './components/Hero';
import NavBar from './components/Navbar';
import Features from './components/Features';
import Story from './components/Story';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <LenisSmoothScroll>
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <NavBar />
        <Hero />
        <About />
        <Features />
        <Story />
        <Contact />
        <Footer />
      </main>
    </LenisSmoothScroll>
  );
}

export default App;
