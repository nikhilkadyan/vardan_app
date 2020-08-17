import React from 'react';
import './ExploreContainer.css';

interface ContainerProps {
  children?: React.ReactNode;
  name?: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ children, name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      {children}
    </div>
  );
};

export default ExploreContainer;
