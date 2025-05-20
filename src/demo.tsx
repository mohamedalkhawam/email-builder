import React from 'react';
import { EmailBuilder } from './index';
import type { EmailContent } from './types';

const Demo: React.FC = () => {
  const [emailContent, setEmailContent] = React.useState<EmailContent>({
    blocks: [
      {
        id: 'block1',
        type: 'heading',
        data: {
          text: 'Welcome to Email Builder',
          level: 1,
        },
      },
      {
        id: 'block2',
        type: 'text',
        data: {
          text: 'This is a sample email built with our drag-and-drop builder.',
        },
      },
    ],
    version: '1.0.0',
  });

  const handleContentChange = (newContent: EmailContent) => {
    console.log('Email content updated:', newContent);
    setEmailContent(newContent);
  };

  return (
    <div className='demo-container'>
      <h1>Email Builder Demo</h1>
      <div className='builder-wrapper'>
        <EmailBuilder
          initialContent={emailContent}
          onChange={handleContentChange}
          themeConfig={{
            colors: {
              primary: '#3f51b5',
              secondary: '#f50057',
              background: '#ffffff',
              text: '#333333',
            },
          }}
        />
      </div>
      <div className='content-preview'>
        <h2>Current Content (JSON):</h2>
        <pre>{JSON.stringify(emailContent, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Demo;
