import { Link } from 'react-router-dom';

const CountryCard = ({ name, population, region, capital, flag }) => {
  // Format population to use commas
  const formattedPopulation = Intl.NumberFormat('en-US').format(population);

  return (
    <Link to={`/${name.split(' ').join('-')}`}>
      <div className="card el-shadow">
        <img className="card-flag" src={flag} alt={`Flag of ${name}`} />
        <div className="card-info">
          <h1 className="card-heading">{name}</h1>
          <div className="card-info-bottom">
            <p>
              <b>Population</b>: {formattedPopulation}
            </p>
            <p>
              <b>Region</b>: {region}
            </p>
            <p>
              <b>Capital</b>: {capital}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
