import {useParams} from "react-router-dom";
import useFetch from "../../useFetch";

const BlogDetails = () => {
    const {id} = useParams()
    const {data: blog, isPending, error} = useFetch(`http://localhost:8000/blogs/${id}`)
    return(
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <h3>Written by - {blog.author}</h3>
                    <p>{blog.body}</p>
                </article>
            )}
        </div>
    );
}
export default BlogDetails;