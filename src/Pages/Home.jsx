import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="hero-container">

        <div className="hero">
          <h1>Resume Builder</h1>
          <p>Create ATS-friendly resumes easily</p>

          <div className="btn-group">
            <button onClick={() => navigate("/builder")}>
              Create Resume
            </button>
            <button
              className="secondary"
              onClick={() => navigate("/ats")}
            >
              ATS Check
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-mock">
            <h3>Live Resume Preview</h3>
            <p>Modern • ATS-friendly • Exportable</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
