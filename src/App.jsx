import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";

import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact";
import { Blog } from "./components/Blog";
import { CategoryView } from "./components/Category";
import { ThemeProvider } from "./components/context/ThemeContext";
import { useIsMobile } from "./components/hooks/useIsMobile";

function App() {
  const isMobile = useIsMobile();
  console.log(isMobile)

  return (
    <ThemeProvider>
      <Router>
        <Navbar />
         <AppRoutes />
      </Router>
    </ThemeProvider>
  );
}

function AppRoutes() {
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    return (
      <div className="main-content">
        <Home id="home" />
        <About id="about" />
        <Projects id="projects" />
        <Contact id="contact" />
        <Blog id="blog" />
      </div>
    );
  }

  return (
    <div className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<CategoryView />} />
      </Routes>
    </div>
  );
}




export default App;
