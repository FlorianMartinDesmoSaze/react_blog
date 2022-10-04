import React, { useState } from 'react';

const Home = () => {
    const [name, setName] = useState('Dr Jones')
    const [age, setAge] = useState(33)

    const handleClick = () => {
        setName('Abe')
        setAge(22)
    }

    return (
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>click me</button>
            <p>Hello, my name is {name} and I am {age} years old.</p>
        </div>
    );
}

export default Home;