import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    const [isPending, setIsPending] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs')
                .then(res => {
                    if(!res.ok) {
                        throw new Error(`Could not fetch data from that resource`);
                    }
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    setBlogs(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);

                })
        }, 1000);
    }, []);

    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blogs && <BlogList blogs={blogs} title={"Blogs list"} />}
        </div>
    );
}

export default Home;