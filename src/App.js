import './App.css';
import Navbar from "./components/Navbar/Navbar";

function App() {
  const title = 'Welcome to te new blog';
  const likes = 50;
  const person = {
    name: 'Dmitry',
    age: 36
  }
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} time</p>
      </div>
    </div>
  );
}

export default App;
