import React from 'react';
import './Main.css';
import Country from '../Country/Country';

export default function Main({ countries }) {
  return (
    <div className="main">
      {countries.map((country) => {
        return <Country key={country.id} {...country} />;
      })}
    </div>
  );
}
