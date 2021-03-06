import { useState, useEffect } from 'react';
import './Main.css';
import Country from '../Country/Country';
import { getCountries } from '../../services/countries';

export default function Main() {
  const [query, setQuery] = useState([]);
  const [continent, setContinent] = useState('All');
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sorted, setSorted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      setCountries(data);
      setLoading(false);
    };
    fetchData();
  }, [countries]);

  function filterCountries() {
    let filteredCountries = countries.filter((country) => {
      return (
        country.name.includes(query) && (country.continent === continent || continent === 'All')
      );
    });
    if (sorted === true) {
      return filteredCountries.sort((a, b) => {
        return a.name > b.name ? 1 : -1;
      });
    } else {
      return filteredCountries;
    }
  }

  if (loading) return <div>Loading...</div>;
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
          <option value="Oceania">Oceania</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
        </select>
        <button value={sorted} onClick={() => setSorted((prevState) => !prevState)}>
          Sort A-Z
        </button>
      </div>
      <div className="main">
        {filterCountries().map((country) => {
          return <Country key={country.id} {...country} />;
        })}
      </div>
    </>
  );
}
