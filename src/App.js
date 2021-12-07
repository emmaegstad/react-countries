import { useEffect, useState } from 'react';
import './App.css';
import Country from './components/Country/Country';
import { getCountries } from './services/countries';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      setCountries(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      {countries.map((country) => {
        return <Country key={country.id} {...country} />;
      })}
    </div>
  );
}

export default App;
