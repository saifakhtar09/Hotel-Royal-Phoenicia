import React from 'react';
import { cn } from '../../utils/cn';
import Container from './Container';

const Section = ({
  children,
  className,
  containerSize = 'default',
  background = 'white',
  padding = 'default'
}) => {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-gray-900',
    blue: 'bg-blue-900',
    gradient: 'bg-gradient-to-br from-blue-50 to-white'
  };

  const paddings = {
    sm: 'py-12',
    default: 'py-16 md:py-24',
    lg: 'py-20 md:py-32',
    none: ''
  };

  return (
    <section className={cn(backgrounds[background], paddings[padding], className)}>
      <Container size={containerSize}>
        {children}
      </Container>
    </section>
  );
};

export default Section;