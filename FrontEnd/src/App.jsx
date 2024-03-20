// pages
import Day10 from "./Days/Day10-Day20/pages/Day10";
import Home from "./pages/Home";

// layout
import Navbar from "./layout/Navbar";
import Content from "./layout/Content";

// css
import "./app.css";

// important Packages
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Content>
          <Routes>
            <Route path="/day-10" element={<Day10 />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Content>
      </Router>
    </main>
  );
}

export default App;
