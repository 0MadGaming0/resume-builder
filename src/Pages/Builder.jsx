import { motion } from "framer-motion";

function Builder() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      style={{ padding: "40px" }}
    >
      <h2>Resume Builder</h2>
      <p>Select template and build your resume</p>
    </motion.div>
  );
}

export default Builder;
