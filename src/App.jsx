import { BrowserRouter } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import  Loading  from "./components/Loading"
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Partenaire,
  Input,
  Footer
} from "./components";
import Features from "./components/Features";
import Team from "./components/Team";
const App = () => {

  const [isLoading, setIsLoading] = useState(true);

  
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference"
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <BrowserRouter>
      
        <div className="relative z-0 bg-primary" onMouseEnter={textEnter} onMouseLeave={textLeave}>
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Feedbacks />
          <Tech />
          <Input/>
          <Works />
          <Features />
          <Partenaire/>
          <Team />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
          <Footer/>
        </div>
     
      {/* <Cursor
      /> */}
    </BrowserRouter>
  );
};

export default App;
