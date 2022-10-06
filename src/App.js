import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  // const title = "Welcome to our little blog";
  // const likes = 50;

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        {/* <p>{likes}</p>
        <p>{likes ? likes/2 : "not found"}</p>
        <p>{likes === 100 ? "you did it !" : "you're not there yet"}</p> */}
      </div>
    </div>
  );
}

export default App;
