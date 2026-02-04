import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ padding: "40px" }}
    >
      <h1>Resume Builder</h1>
      <p>Create ATS-friendly resumes easily</p>

      <button onClick={() => navigate("/builder")}>
        Create Resume
      </button>

      <button onClick={() => navigate("/ats")}>
        ATS Check
      </button>
    </motion.div>
  );
}

export default Home;
