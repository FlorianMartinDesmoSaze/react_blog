import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
    // const blogs = props.blogs;
    // const title = props.title;
    // const {blogs} = props;
console.log(blogs);
    return (
        <div className="blog-list">
            <h2> {title} </h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`} style={{textDecoration: "none"}}>
                        <h2>{blog.title}</h2>
                        <p>{blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;