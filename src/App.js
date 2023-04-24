import { useEffect, useState } from 'react';
import { Route, Routes, useMatch } from 'react-router-dom';
import { getAll } from './api';
import Header from './components/Header';
import Home from './components/Home';
import CountryDetails from './components/CountryDetails';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [visible, setVisible] = useState([]);

  const getData = async () => {
    const data = await getAll();
    setCountries(data);
    setVisible(data);
  };

  const setTheme = (theme) => {
    window.localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
  };

  const toggleTheme = () => {
    if (localStorage.getItem('theme') === 'theme-light') {
      setTheme('theme-dark');
    } else {
      setTheme('theme-light');
    }
  };

  // Filter countries by the search bar input
  const filterFromSearch = (input) => {
    if (input) {
      setVisible(
        countries.filter((country) => {
          return country.name.common
            .toLowerCase()
            .includes(input.toLowerCase());
        })
      );
    } else {
      setVisible(countries);
    }
  };

  const filterByRegion = (region) => {
    if (region === 'All') {
      setVisible(countries);
      return;
    }

    setVisible(countries.filter((country) => country.region === region));
  };

  const countryMatch = useMatch('/:name');
  const matchedCountry = countryMatch
    ? countries.find(
        (country) =>
          country.name.common.split(' ').join('-') === countryMatch.params.name
      )
    : null;

  useEffect(() => {
    getData();
  }, []);

  if (localStorage.getItem('theme') === 'theme-light') {
    setTheme('theme-light');
  } else {
    setTheme('theme-dark');
  }

  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <main>
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <Home
                  countries={visible}
                  handleSearch={filterFromSearch}
                  handleRegionFilter={filterByRegion}
                />
              }
            />
            <Route
              path='/:country'
              element={<CountryDetails country={matchedCountry} />}
            />
          </Routes>
        </div>
      </main>
    </>
  );
};

export default App;
