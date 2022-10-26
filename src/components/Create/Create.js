import {useState} from "react";
import {useHistory} from 'react-router-dom'
import axios from "axios";


const Create = () => {
    let currentDate = new Date().toJSON().slice(0,10).replace(/-/g,'/');
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');
    const [date, setDate] = useState(currentDate)
    const [isPending, setIsPending] = useState(false);
    const history = useHistory()


    const handleSubmit =(e) => {
        e.preventDefault();
        const blog = {title, body, author, date}
        setIsPending(true)

        axios.post('http://localhost:8000/blogs', {...blog })
            .then(() => {
            console.log('new blog added');
            setIsPending(false)
            history.push('/')
        })
    }

    return(
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input
                    type='text'
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}>
                </input>
                <label>Blog body</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}>

                </textarea>
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}>
                    <option value='Mario'>Mario</option>
                    <option value='John'>John</option>
                    <option value='Ivan'>Ivan</option>
                    <option value='Yoshi'>Yoshi</option>
                    <option value='Julia'>Julia</option>
                    <option value='Sabrina'>Sabrina</option>
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
                <p>{date}</p>
            </form>
        </div>
    );
}
export default Create;