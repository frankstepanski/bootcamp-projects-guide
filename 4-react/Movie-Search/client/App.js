import React, {useState} from 'react';

const App = () => {
  const [message, setMessage] = useState("Hello World");

  const handleChange = () => {
    setMessage("Goodbye")
  }

  return (
       <>
         <h2>{message}</h2>
         <button onClick={handleChange}>
            Change Message
          </button>
       </>
  )
}

export default App;