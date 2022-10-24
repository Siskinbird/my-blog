import {useState} from "react";
import BlogList from "../BlogList/BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsum...', author: 'Dmitry', id: 1},
        {title: 'Welcome party', body: 'lorem ipsum...', author: 'Gleb', id: 2},
        {title: 'World is ower', body: 'lorem ipsum...', author: 'Gleb', id: 3}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs)
    }

    return (
        <div className="home">
            <BlogList blogs={blogs}
                      title='All blogs'
                      handleDelete={handleDelete}/>
            {/*<BlogList blogs={blogs.filter((blog) => blog.author === 'Gleb')}*/}
            {/*          title='Gleb blog'/>*/}
        </div>
    );
}
export default Home;