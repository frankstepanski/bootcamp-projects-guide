import React, { useState } from "react";

function Greeting() {

  const [greeting, setGreeting] = useState("Hello!");

  const toggleGreeting = () => {
    setGreeting(greeting === "Hello!" ? "Goodbye." : "Hello!")
  }

  // note: component re-renders with a change in state or props
  console.log(" --- <App> rendered --- ");

    return (
        <>
          <h2>{greeting}</h2>
          <button onClick = {() => toggleGreeting()}>Change Greeting</button>
        </>
      );
}
  
export default Greeting;