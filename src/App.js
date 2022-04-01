import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Friends from "./components/Friends/Friends";
import About from "./components/About/About";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="App">
      <h1>Welcome to my fancy Routing Website</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
