import React from 'react';
import ParticleText from './ParticleText';

export default function HeroParticle() {
  return (
    <>
      <ParticleText
        text="Go Mobile,"
        fontSize={90}
        fontFamily="'Cabinet Grotesk', sans-serif"
        fontWeight={800}
        color="#FFFFFF"
        textAlign="center"
        particleSize={1.6}
        particleDensity={4}
        dispersionStrength={18}
        returnSpeed={0.07}
        height={100}
      />
      <ParticleText
        text="Stay Connected"
        fontSize={90}
        fontFamily="'Cabinet Grotesk', sans-serif"
        fontWeight={800}
        color="#FFFFFF"
        textAlign="center"
        particleSize={1.6}
        particleDensity={4}
        dispersionStrength={18}
        returnSpeed={0.07}
        height={100}
      />
    </>
  );
}