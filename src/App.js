import React from "react";
import "./App.css";

import {
  Blogs,
  Features,
  Footer,
  Header,
  Possibility,
  Gpt3,
} from "./container";
import { Brand, Cta, Navbar } from "./components";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar></Navbar>
        <Header></Header>
      </div>
      <Brand></Brand>
      <Gpt3></Gpt3>
      <Features></Features>
      <Possibility></Possibility>
      <Cta></Cta>
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  );
};

export default App;
