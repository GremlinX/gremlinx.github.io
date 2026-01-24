import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact";
import { ThemeProvider } from "./components/context/ThemeContext";
import { Blog } from "./components/Blog";
import { CategoryView } from "./components/Category";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <div className="main-content">
          <AppRoutes />
        </div>
      </Router>
    </ThemeProvider>
  );
}


function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<CategoryView />} />
      </Routes>
    </>
  );
}

export default App;
