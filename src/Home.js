import React, { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlog] = useState([
        { title: "light saber prices go sky rocket", body: "Somewhere in the wild, the beast is waiting to feed.", author: "John Travolta", id: 1 },
        { title: "Check out my new pizza restaurant", body: "Somewhere in the wild, the beast is waiting to feed.", author: "Benito Mussolini", id: 2 },
        { title: "Donald Trump was actually a woman", body: "Somewhere in the wild, the beast is waiting to feed.", author: "Oliver Twist", id: 3 }
    ]);

    return (
        <div className="home">
            <BlogList blogs={blogs} title={"Blogs list"} />
        </div>
    );
}

export default Home;