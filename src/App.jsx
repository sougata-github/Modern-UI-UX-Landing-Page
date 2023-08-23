import "./App.css";

import {
  Blog,
  Header,
  Footer,
  Possibility,
  WhatGPT3,
  Features,
} from "./containers/index";

import { Navbar, Brand, CTA } from "./components/index";

const App = () => {
  return (
    <main className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </main>
  );
};

export default App;
