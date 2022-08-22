import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import MobileNav from "./components/MobileNav"
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <div className='container'>
     <Nav />
     <MobileNav/>
     <Home/>
     <About />
     <Projects />
     </div>
    </div>
  );
}

export default App;
