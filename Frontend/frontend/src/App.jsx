import { BrowserRouter, Routes, Route } from "react-router-dom";
import Developers from "./Components/Developers";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Nav from "./Components/Nav";
import Projects from "./Components/Projects";
import Search from "./Components/Search";
import Signup from "./Components/Signup";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/developers" element={<Developers />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
