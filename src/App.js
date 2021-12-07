import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
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
      <Header />
      <Main {...{ countries, setCountries }} />
    </div>
  );
}

export default App;
