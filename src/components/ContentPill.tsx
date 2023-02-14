import React from 'react';
import '../styles/ContentPill.css';

interface ContentPillProps {
  name: string;
}

const ContentPill: React.FC<ContentPillProps> = ({ name }) => {
  return (
    <div className="pill">
      <p>{name}</p>
    </div>
  );
};

export default ContentPill;
