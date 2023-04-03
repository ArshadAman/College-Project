import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddProject from "./Components/AddProject";
import DeleteProject from "./Components/DeleteProject";
import Developers from "./Components/Developers";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Nav from "./Components/Nav";
import OtherProfile from "./Components/OtherProfile";
import Profile from "./Components/Profile";
import ProjectDetials from "./Components/ProjectDetials";
import Projects from "./Components/Projects";
import Search from "./Components/Search";
import Signup from "./Components/Signup";
import { getToken } from "./localStorage";
import ProfileEdit from "./Components/ProfileEdit";

function App() {
  const [userdata, setUserdata] = useState([]);
  const [projects, setProject] = useState([]);
  const [loading, setLoading] = useState(false);
  const [blur, setBlur] = useState(false);
  const {access_token} = getToken();
  const route = "http://127.0.0.1:8000/api/users/get-profile/";
  const getData = async () => {
    setBlur(true);
    setLoading(true);
    await axios
      .get(route, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
      .then((res) => {
        setUserdata(res.data[0]);
        setProject(res.data[1]);
      })
      .catch((err) => {
        console.log(err);
      });
      setBlur(false);
      setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [0]);

  return (
    <BrowserRouter>
      <Nav user={userdata} />
      <Routes>
        <Route path="*" element={<div>Page not found - 404</div>}></Route>
        <Route index element={<Home user={userdata} />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
        <Route exact path="/developers" element={<Developers user={userdata} />}></Route>
        <Route exact path="/search" element={<Search />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/profile"  element={<Profile user={userdata} projects={projects} loading={loading} blur={blur} />}></Route>
        <Route exact path="/dev-profile/:id" element={<OtherProfile />}></Route>
        <Route exact path="/project-details/:id" element={<ProjectDetials user={userdata} />}></Route>
        <Route exact path="/add-project/" element={<AddProject user={userdata} />}></Route>
        <Route exact path="/update/:id" element={<ProjectDetials user={userdata} />}></Route>
        <Route exact path="/delete-project/" element={<DeleteProject user={userdata} />}></Route>
        <Route exact path="/edit-profile/" element={<ProfileEdit user={userdata} />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
