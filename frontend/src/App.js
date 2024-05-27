// src/App.js

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
import ProtectedRoute from "./components/protectedRoute";
import CreateNote from "./screens/singlenote/createnote";
import SingleNote from "./screens/singlenote/singleNote";
function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <Navbar setSearch={(s) => setSearch(s)} />
      <Container>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route
            path="/mynote"
            element={<ProtectedRoute element={<MyNotes />} />}
          />
          <Route
            path="/profile"
            element={<ProtectedRoute element={<ProfileScreen />} />}
          />
          <Route
            path="/note/:id"
            element={<ProtectedRoute element={<SingleNote />} />}
          />
          <Route
            path="/create-note"
            element={<ProtectedRoute element={<CreateNote />} />}
          />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
