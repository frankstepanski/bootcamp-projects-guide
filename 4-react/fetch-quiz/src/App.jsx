import React from 'react';
import Greeting from "./components/Greeting";
import logo from "./assets/images/react.png";
import "./App.css";

function App() {
 

  return (
    <>
      <header><img src = {logo}/></header>
      <Greeting />
    </>
  );
}

export default App;