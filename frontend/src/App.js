import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Container } from "@mui/material";
import Hero from "./screens/landing-page";
import MyNotes from "./screens/mynotes";
import LoginScreen from "./screens/login/loginScreen";

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
        <MyNotes />
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
