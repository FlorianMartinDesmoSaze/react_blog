import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "light saber prices go sky rocket", body: "Somewhere in the wild, the beast is waiting to feed.", author: "John Travolta", id: 1 },
        { title: "Check out my new pizza restaurant", body: "Somewhere in the wild, the beast is waiting to feed.", author: "Benito Mussolini", id: 2 },
        { title: "Donald Trump was actually a woman", body: "Somewhere in the wild, the beast is waiting to feed.", author: "Oliver Twist", id: 3 }
    ]);

    const [name, setName] = useState("Takeshi");

 
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect log ', blogs);
        console.log(name);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title={"Blogs list"} handleDelete={handleDelete}/>
            <p>{name}</p>
            <button onClick={() => setName('Bob')}>Change name</button>
        </div>
    );
}

export default Home;