import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TemplateGallery from "../Components/TemplateGallery.jsx";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="page">
      {/* Hero Section */}
      <div className="hero-container">
        <div className="hero">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Resume Builder
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Create ATS-friendly resumes easily with our professional templates
          </motion.p>

          <motion.div 
            className="btn-group"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <button onClick={() => navigate("/builder")}>
              Create Resume
            </button>
            <button
              className="secondary"
              onClick={() => navigate("/ats")}
            >
              ATS Check
            </button>
          </motion.div>
        </div>

        <motion.div 
          className="hero-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="hero-mock">
            <h3>Live Resume Preview</h3>
            <p>Modern • ATS-friendly • Exportable</p>
          </div>
        </motion.div>
      </div>

      {/* Templates Section */}
      <motion.div 
        className="templates-section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="section-header">
          <h2>Choose Your Template</h2>
          <p>Select from 8 professionally designed templates</p>
        </div>
        <TemplateGallery />
      </motion.div>
    </div>
  );
}

export default Home;
