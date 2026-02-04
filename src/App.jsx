import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Builder from "./Pages/Builder.jsx";
import ATS from "./Pages/ATS.jsx";
import Chatbot from "./Pages/Chatbot.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/builder" element={<Builder />} />
        <Route path="/ats" element={<ATS />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </>
  );
}

export default App;
