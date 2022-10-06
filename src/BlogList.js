const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    console.log(title);
    console.log(blogs);
    return (
        <div className="blog-list">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.author}</p>
                    {/* <p>{blog.body}</p> */}
                </div>
            ))}
        </div>
    );
}

export default BlogList;