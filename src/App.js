import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

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
        <Home />
      </div>
    </div>
  );
}

export default App;
