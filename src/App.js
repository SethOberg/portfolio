import { Routes, Route } from "react-router";
import About from "./pages/About";
import Main from "./pages/Main";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Container from "@mui/material/Container";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
