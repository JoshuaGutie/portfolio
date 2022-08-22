import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import MobileNav from "./components/MobileNav"
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <div className='container'>
     <Nav />
     <MobileNav/>
     <Home/>
     <About />
     <Projects />
     <Contact />
     </div>
    </div>
  );
}

export default App;
