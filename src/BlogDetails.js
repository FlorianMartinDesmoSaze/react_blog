import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch("http://localhost:8000/blogs/" + id);

    console.log(blog);

    return (
        <div className="blog-details">
            <h2>Blog #{id} Details</h2>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{ blog.body }</div>
                </article>
            )}
            {/* <div className="blog-preview" key={blog.id}>
                        <h2 className="blog-title">{ blog.title }</h2>
                    </div> */}
        </div>
    );
}

export default BlogDetails;