import BlogList from "../BlogList/BlogList";
import useFetch from "../../useFetch";

const Home = () => {
    const {data: blogs, isPending, error} = useFetch()
    console.log(blogs);
    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title='All blogs'/>}
        </div>
    );
}
export default Home;