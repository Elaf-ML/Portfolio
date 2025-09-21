import React from 'react';
import { IconType } from 'react-icons';

// This wrapper component solves the TypeScript issues with React Icons
export const IconWrapper = ({ 
  Component, 
  ...props 
}: { 
  Component: IconType; 
  [key: string]: any 
}) => {
  // Cast the Component as a React.ComponentType to fix the TypeScript error
  const IconComponent = Component as React.ComponentType<any>;
  return <IconComponent {...props} />;
};

// Helper function to create a renderable icon from IconType
export const createRenderableIcon = (Icon: IconType, props: any = {}) => {
  return <IconWrapper Component={Icon} {...props} />;
}; 