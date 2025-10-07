import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar";
import {
  Cursor,
  CursorFollow,
  CursorProvider,
} from "./components/ui/cursorComponent";

// Pages
import { Hero } from "./homePage/hero";

// import { Project } from "./pages/Projects";

function App() {
  return (
    <>
      {" "}
      <CursorProvider>
        <Cursor>
          <svg
            className="size-6 text-black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
          >
            <path
              fill="currentColor"
              d="M1.8 4.4 7 36.2c.3 1.8 2.6 2.3 3.6.8l3.9-5.7c1.7-2.5 4.5-4.1 7.5-4.3l6.9-.5c1.8-.1 2.5-2.4 1.1-3.5L5 2.5c-1.4-1.1-3.5 0-3.3 1.9Z"
            />
          </svg>
        </Cursor>

        <CursorFollow>
          <div className="px-3 py-1 bg-white border-2 border-black text-black text-sm rounded-lg shadow-lg">
            You
          </div>
        </CursorFollow>
      </CursorProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          {/* <Route path="/skills" element={<Skills />} /> */}
          {/* <Route path="/artworks" element={<Artworks />} /> */}
          {/* <Route path="/projects" element={<Project />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/footer" element={<Footer />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
