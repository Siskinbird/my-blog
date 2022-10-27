import {useHistory, useParams} from "react-router-dom";
import {
    getDoc,
    deleteDoc,
    doc
} from 'firebase/firestore';

import {db} from "../../firebase-config";
import {useState} from "react";
import useFetch from "../../useFetch";


const BlogDetails = () => {
    const [blog, setBlog] = useState({})
    const {id} = useParams()
    const docRef = doc(db, 'blogs', id);
    getDoc(docRef).then((doc) => {
        setBlog({...doc.data()})
    })

    return(
        <div className="blog-details">
            {/*{isPending && <div>Loading...</div>}*/}
            {/*{error && <div>{error}</div>}*/}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <h3>Written by - {blog.author}</h3>
                    <p>{blog.body}</p>
                    <p className='blog-date'>
                        {blog.date}
                    </p>
                    {/*<button onClick={handleClick}>Delete</button>*/}
                </article>
            )}
        </div>
    );
}
export default BlogDetails;