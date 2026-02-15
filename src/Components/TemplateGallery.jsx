import React, { useState } from 'react';
import TemplateCard from './TemplateCard';
import { templatesData } from '../data/templatesData';
import './TemplateGallery.css';

const TemplateGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [templates] = useState(templatesData);

  const categories = [
    { id: 'all', label: 'All Templates', icon: '📋' },
    { id: 'professional', label: 'Professional', icon: '💼' },
    { id: 'creative', label: 'Creative', icon: '🎨' },
    { id: 'modern', label: 'Modern', icon: '✨' },
    { id: 'minimalist', label: 'Minimalist', icon: '⬜' },
  ];

  const filteredTemplates = selectedCategory === 'all' 
    ? templates 
    : templates.filter(t => t.category === selectedCategory);

  return (
    <div className="template-gallery">
      <div className="gallery-header">
        <h1>Choose Your Resume Template</h1>
        <p>Select from {templates.length} professional templates</p>
      </div>
      
      <div className="template-filters">
        {categories.map(category => (
          <button
            key={category.id}
            className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            <span className="filter-icon">{category.icon}</span>
            <span className="filter-label">{category.label}</span>
          </button>
        ))}
      </div>
      
      {filteredTemplates.length === 0 ? (
        <div className="no-results">
          <p>No templates found in this category</p>
        </div>
      ) : (
        <div className="templates-grid">
          {filteredTemplates.map(template => (
            <TemplateCard 
              key={template.id} 
              template={template}
              onSelect={() => console.log('Selected:', template.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TemplateGallery;