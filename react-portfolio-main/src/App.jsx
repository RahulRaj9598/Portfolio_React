import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";
import Por from "./components/Por";
import Projects from "./components/Projects";
import Carousel from "./components/Carousel";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-purple-300 selection:text-purple-900 scroll-smooth">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        </div>
      </div>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 pt-16">
          <Navbar />
          <Hero />
          <About />
          <Tech />
          <Por />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
