import { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import Results from './components/Results';

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [newFilter, setNewFilter] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setAllCountries(response.data);
      })
  }, []);

  const handleFilterChange = (e) => {
    if (e.target.value.trim().length) {
      setNewFilter(e.target.value);
      let filtered = allCountries
        .filter(country => country.name.common.toLowerCase().includes(e.target.value.trim().toLowerCase()))
        .sort((a,b) => a.name.common.localeCompare(b.name.common, 'en', {sensitivity: 'base'}));
      setFiltered(filtered);
    }
    else {
      setNewFilter(e.target.value);
      setFiltered([]);
    }
  }
  
  return (
    <div>
      <Filter handleChange={handleFilterChange} value={newFilter} />
      <Results countries={filtered} />
    </div>
  );
}

export default App;
