import {useHistory, useParams} from "react-router-dom";
import useFetch from "../../useFetch";
import axios from "axios";

const BlogDetails = () => {
    const {id} = useParams()
    const {data: blog, isPending, error} = useFetch(`http://localhost:8000/blogs/${id}`)
    const history = useHistory()

    const handleClick = () => {
        axios.delete(`http://localhost:8000/blogs/${blog.id}`)
            .then(() => {
            history.push('/')
        })
    }

    return(
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <h3>Written by - {blog.author}</h3>
                    <p>{blog.body}</p>
                    <p className='blog-date'>
                        {blog.date}
                    </p>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}
export default BlogDetails;