
import About from './About';
import './App.css';
import Footer from './Components.js/Footer';
import GetInvolved from './Components.js/GetInvolved';
import Hero from './Components.js/Hero';
import Navbar from './Components.js/Navbar';
import Events from './Events';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <About/>
     <Events/>
     <GetInvolved/>
     <Footer/>
    </div>
  );
}

export default App;
