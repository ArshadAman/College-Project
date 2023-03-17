import { ReactDOM } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Developers from "./Components/Developers";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Projects from "./Components/Projects";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/developers" element={<Developers />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
