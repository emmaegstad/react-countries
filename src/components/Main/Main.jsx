import { useState } from 'react';
import './Main.css';
import Country from '../Country/Country';

export default function Main({ countries }) {
  const [query, setQuery] = useState([]);
  const [continent, setContinent] = useState('All');

  function filterCountries() {
    return countries.filter((country) => {
      return (
        country.name.includes(query) && (country.continent === continent || continent === 'All')
      );
    });
  }

  return (
    <>
      <div className="filters">
        <input
          className="search"
          type="text"
          placeholder="Search countries"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select value={continent} onChange={(e) => setContinent(e.target.value)}>
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Asia">Asia</option>
          <option value="Australia">Australia</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
        </select>
      </div>
      <div className="main">
        {filterCountries().map((country) => {
          return <Country key={country.id} {...country} />;
        })}
      </div>
    </>
  );
}
