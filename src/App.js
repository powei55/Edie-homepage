import React from "react";
import NavBar from "./components/NavBar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Gallery from "./components/Gallery.jsx";
import Team from "./components/Team.jsx";
import Info from "./components/Info.jsx";
import Footer from "./components/Footer.jsx";


function App() {
   
  return (
    <div className="w-full">
        <NavBar />
        <Hero />
        <Services />
        <Gallery />
        <Team />
        <Info />
        <Footer />
    </div>
  );
}

export default App;
