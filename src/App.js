import './App.scss';
import Header from './components/HeaderComponent/Header'
import React from "react";
import HeroComponent from "./components/HeroComponent/Hero";

function App() {
  return (
    <div className="App">
        <Header />
        <HeroComponent />
    </div>
  );
}

export default App;
