// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar.js";
import Hero from "./components/hero.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header>
        <Hero/>   
      </header>
    </div>
  );
}

export default App;
