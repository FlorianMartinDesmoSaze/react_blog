import React, { useState } from 'react';

const Home = () => {
    const logSome = () => {
        console.log('Stop clicking me you nitwit! I have bombs!')
    }

    let [click, setClick] = useState(0);
    const handleClick = (e) => {
        setClick(click+1)
        console.log(e.target)
    }

const myName = "Florian";
    const sayHello = (name, e) => {
        console.log(`Hello ${name}`);
        console.log(e.target);
    }

    return (
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click me</button>
            <p>{click}</p>
            <button onClick={(e) => sayHello(myName, e)}>Say hi</button>
            <p>{myName}</p>
            <button onClick={logSome}>Click to see some log</button>
        </div>
    );
}

export default Home;