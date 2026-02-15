import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TemplateCard.css'; // You'll need to create this CSS file

function TemplateCard({ template, onSelect }) {
  const navigate = useNavigate();

  const handlePreview = () => {
    // Navigate to preview with template ID
    navigate(`/preview/${template.id}`);
  };

  const handleUseTemplate = () => {
    // When user clicks "Use Template", go to builder with this template
    navigate(`/builder?template=${template.id}`);
  };
  
  return (
    <div className="template-card">
      <div className="template-preview">
        <img 
          src={template.thumbnail} 
          alt={template.name}
          loading="lazy"
        />
        <div className="template-overlay">
          <button 
            className="btn-preview"
            onClick={handlePreview}
          >
            👁️ Preview
          </button>
          <button 
            className="btn-use"
            onClick={handleUseTemplate}
          >
            ✏️ Use Template
          </button>
        </div>
        {template.popular && (
          <span className="popular-badge">🔥 Popular</span>
        )}
      </div>
      <div className="template-info">
        <h3>{template.name}</h3>
        <p className="template-description">{template.description}</p>
        <div className="template-tags">
          {template.styles.map((style, index) => (
            <span key={index} className="tag">{style}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TemplateCard;
