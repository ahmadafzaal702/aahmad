'use client';

import { TypeAnimation } from 'react-type-animation';

export function NameTypeWriter() {
  return (
    <TypeAnimation
      sequence={[
        'Afzaal Ahmad',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ display: 'inline-block' }}
      repeat={Infinity}
    />
  );
}

export function TaglineTypeWriter() {
  return (
    <TypeAnimation
      sequence={[
        'Full Stack Developer | AI/ML Enthusiast',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ display: 'inline-block' }}
      repeat={Infinity}
    />
  );
}