import { motion } from "framer-motion";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { templatesData } from "../data/templatesData";
import "./Builder.css";

function Builder() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const templateId = searchParams.get("template");
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  useEffect(() => {
    if (templateId) {
      const template = templatesData.find(t => t.id === templateId);
      setSelectedTemplate(template);
    }
  }, [templateId]);

  // If no template selected, show template selection first
  if (!selectedTemplate) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="builder-container no-template"
      >
        <div className="no-template-content">
          <h2>Select a Template First</h2>
          <p>Please choose a template from the gallery to start building your resume</p>
          <button 
            className="btn-primary"
            onClick={() => navigate("/")}
          >
            Browse Templates
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="builder-container"
    >
      <div className="builder-header">
        <div className="header-left">
          <button 
            className="back-btn"
            onClick={() => navigate("/")}
          >
            ← Back to Templates
          </button>
          <h2>Building with: {selectedTemplate.name}</h2>
        </div>
        <div className="header-right">
          <button 
            className="preview-btn"
            onClick={() => window.open(selectedTemplate.pdfFile, '_blank')}
          >
            👁️ Preview Template
          </button>
          <button className="save-btn">Save Resume</button>
          <button className="export-btn">Export PDF</button>
        </div>
      </div>

      <div className="builder-content">
        {/* Left Side - Form */}
        <div className="builder-form">
          <h3>Personal Information</h3>
          
          <div className="form-group">
            <label>Full Name</label>
            <input 
              type="text" 
              placeholder="John Doe"
              defaultValue={selectedTemplate.author || ""}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="john@example.com" />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input type="tel" placeholder="(555) 123-4567" />
          </div>

          <div className="form-group">
            <label>Address</label>
            <input type="text" placeholder="City, State" />
          </div>

          <h3>Professional Summary</h3>
          <div className="form-group">
            <textarea 
              rows="4" 
              placeholder="Brief summary of your experience and goals..."
            ></textarea>
          </div>

          <h3>Work Experience</h3>
          <div className="experience-item">
            <div className="form-group">
              <label>Job Title</label>
              <input type="text" placeholder="e.g. Administrative Assistant" />
            </div>
            <div className="form-group">
              <label>Company</label>
              <input type="text" placeholder="Company Name" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Start Date</label>
                <input type="text" placeholder="MM/YYYY" />
              </div>
              <div className="form-group">
                <label>End Date</label>
                <input type="text" placeholder="MM/YYYY" />
              </div>
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea rows="3" placeholder="Describe your responsibilities..."></textarea>
            </div>
            <button className="add-more-btn">+ Add More Experience</button>
          </div>

          <h3>Education</h3>
          <div className="education-item">
            <div className="form-group">
              <label>Degree</label>
              <input type="text" placeholder="e.g. Bachelor of Arts" />
            </div>
            <div className="form-group">
              <label>School</label>
              <input type="text" placeholder="University Name" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Graduation Year</label>
                <input type="text" placeholder="YYYY" />
              </div>
            </div>
            <button className="add-more-btn">+ Add More Education</button>
          </div>

          <h3>Skills</h3>
          <div className="form-group">
            <input 
              type="text" 
              placeholder="e.g. Microsoft Office, Spanish, Leadership (comma separated)"
            />
          </div>
        </div>

        {/* Right Side - Live Preview */}
        <div className="builder-preview">
          <div className="preview-header">
            <h3>Live Preview</h3>
            <span className="template-badge">{selectedTemplate.category}</span>
          </div>
          <div className="preview-frame">
            <iframe
              src={selectedTemplate.pdfFile}
              title="Resume Preview"
              className="preview-iframe"
            />
          </div>
          <div className="preview-note">
            <p>Your changes will appear here in real-time</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Builder;
