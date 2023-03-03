// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/navbar.js";
import Hero from "./components/hero.js";
import { useState, useEffect } from "react";
import LoadingPage from "./loadingPage";

function someRequest() {
  //Simulates a request; makes a "promise" that'll run for 2.5 seconds
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    someRequest().then(() => {
      setIsLoading(!isLoading);
    });
  });

  if (isLoading) {
    return <LoadingPage />;
  } else {
    return (
      <div className="App">
        <Navbar />
        <header>
          <Hero />
        </header>
      </div>
    );
  }
}

export default App;
