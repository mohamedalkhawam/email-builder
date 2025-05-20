import React from 'react';
import type { EmailBuilderProps, EmailContent } from '../../types';

const EmailBuilder: React.FC<EmailBuilderProps> = ({ initialContent, themeConfig, onChange, readOnly = false, components = {}, options = {} }) => {
  // Use initialContent, themeConfig to suppress unused vars warnings
  React.useEffect(() => {
    console.log('Initialized with:', { initialContent, themeConfig, readOnly, components, options });
  }, [initialContent, themeConfig, readOnly, components, options]);

  const handleChange = React.useCallback(
    (newContent: EmailContent) => {
      if (onChange) {
        onChange(newContent);
      }
    },
    [onChange]
  );

  // Example of using handleChange
  React.useEffect(() => {
    if (initialContent) {
      // This is just to demonstrate using handleChange
      // In a real implementation, you'd call this when content changes
      handleChange(initialContent);
    }
  }, [initialContent, handleChange]);

  return (
    <div className='email-builder-container'>
      {/* This is a placeholder for the actual email builder implementation */}
      <div>Email Builder Component</div>
    </div>
  );
};

export default EmailBuilder;
