import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { templatesData } from '../data/templatesData';
import './PDFPreview.css';

const PDFPreview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const template = templatesData.find(t => t.id === id);

  if (!template) {
    return (
      <div className="preview-error">
        <h2>Template not found</h2>
        <button onClick={() => navigate('/')}>
          Back to Templates
        </button>
      </div>
    );
  }

  return (
    <div className="pdf-preview-container">
      <div className="preview-header">
        <h1>{template.name}</h1>
        <div className="preview-actions">
          <button 
            className="btn-use"
            onClick={() => navigate(`/builder?template=${template.id}`)}
          >
            ✏️ Use This Template
          </button>
          <button 
            className="btn-download"
            onClick={() => window.open(template.pdfFile, '_blank')}
          >
            ⬇️ Download PDF
          </button>
          <button 
            className="btn-back"
            onClick={() => navigate('/')}
          >
            ← Back
          </button>
        </div>
      </div>
      
      <div className="pdf-viewer-container">
        <iframe
          src={`${template.pdfFile}#toolbar=1&navpanes=1&view=FitH`}
          title={template.name}
          className="pdf-viewer"
        />
      </div>
    </div>
  );
};

export default PDFPreview;