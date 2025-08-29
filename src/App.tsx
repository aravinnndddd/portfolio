// import reactLogo from './assets/react.svg'

import "./App.css";
import Navbar from "./components/navbar";
import {
  Cursor,
  CursorFollow,
  CursorProvider,
} from "./components/ui/cursorComponent";

import { About } from "./homePage/hero";
import { Skills } from "./homePage/skills";
// import { Artworks } from "./Components/artworks";
// import Navbar from "./Components/navbar";
// import { Element } from "react-scroll";
// import Skills from "./Components/skills";
// import { Project } from "./Components/project";
// import { Contact } from "./Components/contact";
// import { Footer } from "./Components/footer";

function App() {
  return (
    <div className="bg-black">
      <CursorProvider>
        <Cursor>
          <svg
            className="size-6 text-white"
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
          <div className="px-3  py-1 bg-white text-black text-sm rounded-lg shadow-lg">
            You
          </div>
        </CursorFollow>
      </CursorProvider>
      <Navbar />

      <About />
      {/* Cursor Layer */}

      <Skills />

      {/* 
      <Element name="artworks">
        <Artworks />
      </Element>
      <Element name="projects">
        <Project />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>

      <Element name="footer">
        <Footer />
      </Element> */}
    </div>
  );
}

export default App;
