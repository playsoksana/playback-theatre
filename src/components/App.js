import { useState } from "react";
import { Route, Routes, Switch } from "react-router-dom";

import Footer from "./Footer";
import Gallery from "../views/Gallery/Gallery";
import Header from "./Header";
import Home from "../views/Home/HomeView";
import Hero from "./Hero/Hero";

import '../styles/base.scss';

function App() {
  const [state, setState] = useState({});

  function onSubmitForm(data) {
    setState(data);
    console.log(state);
  }

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/gallery" exact element={<Gallery/>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
