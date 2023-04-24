import CountryCard from './CountryCard';
import FilterBar from './FilterBar';

const Home = ({ countries, handleSearch, handleRegionFilter }) => {
  return (
    <div>
      <FilterBar handleInput={handleSearch} handleRegionFilter={handleRegionFilter} />
      <div className="country-cards-container">
        {countries.map((c) => {
          return (
            <CountryCard
              key={c.name.common}
              name={c.name.common}
              population={c.population}
              region={c.region}
              capital={c.capital}
              flag={c.flags.png}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
