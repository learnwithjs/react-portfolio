import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import About from "./routes/About";
// import Contact from "./routes/Contact";
// import Home from "./routes/Home";
// import Project from "./routes/Project";

const Home = React.lazy(() => import("./routes/Home"));
const About = React.lazy(() => import("./routes/About"));
const Project = React.lazy(() => import("./routes/Project"));
const Contact = React.lazy(() => import("./routes/Contact"));


function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading .....</h1>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </Suspense>
    </>
  );
}

export default App;
