'use client';

import { TypeAnimation } from 'react-type-animation';

export default function TypeWriter() {
  return (
    <TypeAnimation
      sequence={[
        'Crafting Digital Experiences That Matter',
        1000,
        'Crafting Web Applications That Scale',
        1000,
        'Crafting User Interfaces That Delight',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ display: 'inline-block' }}
      repeat={Infinity}
    />
  );
}