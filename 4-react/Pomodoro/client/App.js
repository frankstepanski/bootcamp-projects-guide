import React, { useState, useRef } from "react";
import './App.css';

const App = () => {

    // state variables:
    const [title, setTitle] = useState('Let the countdown begin!!!');
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [isRunning, setIsRunning] = useState(false);
    //  As component re-renders (each second), need to make sure it is not se to null.
    const intervalRef = useRef(null);


    // functions:

    function startTimer() {
        // Do not create another timer while one is still running
        if (intervalRef.current !== null) return
    
        setTitle(`You're doing great!`);
        setIsRunning(true);
        // reference to running timer (needed to cancel)
        intervalRef.current = setInterval(() => {
           setTimeLeft((timeLeft) => {
            if (timeLeft >= 1) return timeLeft - 1;
            // reset timer
            resetTimer();
            return 0;
        });
        }, 1000);
    }

    function stopTimer() {

        // Do not create another timer while one is still running
        if (intervalRef.current === null) return

        clearInterval(intervalRef.current);
        
        // clearing out timer so timer can be re-started
        intervalRef.current = null;
        setTitle('Keep it up!')
        setIsRunning(false);
    }

    function resetTimer() {

        clearInterval(intervalRef.current);
        setTitle('Ready to go another round?');
        setTimeLeft(25 * 60);
        setIsRunning(false);
    }

     // computed: 
    const minutes = Math.floor(timeLeft / 60)
          .toString()
          .padStart(2, '0'); // pads '0'
    const seconds = (timeLeft - minutes * 60)
          .toString()
          .padStart(2, '0'); // pads '0'
    
    return (
        <div className="app">
            <h2>{title}</h2>

            <div className="timer">
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>
            </div>

            <div className="buttons">
                {!isRunning && <button onClick = {startTimer}>Start</button>}
                {isRunning && <button onClick = {stopTimer}>Stop</button>}
                <button onClick = {resetTimer}>Reset</button>
            </div>
        </div>
    );
}

export default App;