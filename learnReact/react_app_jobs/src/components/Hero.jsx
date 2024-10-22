import React from 'react';
import './hero.css';

const Hero = ({ 
    tittle = 'Become React Dev',
    subtitle= 'Find the react job that fits your skills and needs'
}) => {
  return (
    <section className='hero'>
        <h1>{tittle}</h1>
        <p>{subtitle}</p>
    </section>
  )
}

export default Hero;
