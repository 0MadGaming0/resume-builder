function TemplateCard({ onSelect }) {
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
    <div>
      <button onClick={onSelect}>Choose Template</button>
    </div>
  );
}

export default TemplateCard;
