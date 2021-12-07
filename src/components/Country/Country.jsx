import React from 'react';
import './Country.css';

export default function Country({ name, iso2 }) {
  return (
    <div className="country">
      <img
        src={`https://flagcdn.com/60x45/${iso2.toLowerCase()}.png`}
        width="60"
        height="45"
        alt={name}
      />
      <p>{name}</p>
    </div>
  );
}
