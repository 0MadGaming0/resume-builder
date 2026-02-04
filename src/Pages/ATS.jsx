import { useNavigate } from "react-router-dom";

function ATS() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px" }}>
      <h2>ATS Check</h2>
      <p>Resume is ATS friendly ✅</p>

      <button onClick={() => navigate("/chatbot")}>
        Improve with Chatbot
      </button>
    </div>
  );
}

export default ATS;
