import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Container } from "@mui/material";
import Hero from "./screens/landing-page";
import MyNotes from "./screens/mynotes";
import LoginScreen from "./screens/login/loginScreen";
import RegisterScreen from "./screens/register/registerScreen";
import ProfileScreen from "./screens/profile/profileEditScreen";
// import SingleNote from "./screens/singlenote/singleNote";
// import CreateNote from "./screens/singlenote/createnote";

function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <Navbar setSearch={(s) => setSearch(s)} />
      <Container>
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
        <Routes>
          <Route path="/register" element={<RegisterScreen />} />
        </Routes>
        <Routes>
          <Route path="/mynote" element={<MyNotes />} />
        </Routes>
        <Routes>
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
        {/* <Routes>
          <Route path="/note/:id" element={<SingleNote />} />
        </Routes>
        <Routes>
          <Route path="/create-note" element={<CreateNote />} />
        </Routes> */}
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
