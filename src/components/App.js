import React from "react";

import Header from './Header';
import Hero from "./Hero";
import Footer from "./Footer";
import VideoBlock from "./VideoBlock/VideoBlock";

function App() {
  return (
    <>
    <Header/>
    <main>
    <Hero />
    <VideoBlock/>
    </main>
     
      <Footer />
    </>
  );
}

export default App;
