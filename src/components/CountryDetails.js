import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getBorder } from '../api';

const CountryPage = ({ country }) => {
  const [borderCountries, setBorderCountries] = useState([]);

  if (!country) return null;

  const formattedPopulation = Intl.NumberFormat('en-US').format(
    country.population
  );

  const requestBorders = async () => {
    const borders = country.borders;

    if (borders)
      setBorderCountries(
        await Promise.all(
          borders.map(async (border) => await getBorder(border))
        )
      );
  };

  requestBorders();

  return (
    <>
      <div className='back-btn-container'>
        <Link to={'/'}>
          <button className='back-btn el-shadow'>
            <ion-icon name='arrow-back'></ion-icon>
            <span className='btn-text'>Back</span>
          </button>
        </Link>
      </div>
      <div className='details-container'>
        <img
          className='details-img'
          src={country.flags.svg}
          alt={`Flag of ${country.name.common}`}
        />
        <div className='details-content'>
          <h1 className='details-heading'>{country.name.common}</h1>
          <div className='details-info'>
            <div className='info-left'>
              <p>
                <b>Native Name:</b>{' '}
                {country.name.nativeName
                  ? Object.values(country.name.nativeName)[0].common
                  : ''}
              </p>
              <p>
                <b>Population:</b> {formattedPopulation}
              </p>
              <p>
                <b>Region:</b> {country.region}
              </p>
              <p>
                <b>Sub Region:</b> {country.subregion}
              </p>
              <p>
                <b>Capital:</b>{' '}
                {country.capital ? country.capital.join(', ') : ''}
              </p>
            </div>
            <div className='info-right'>
              <p>
                <b>Top Level Domain:</b> {country.tld[0]}
              </p>
              <p>
                <b>Currencies:</b>{' '}
                {country.currencies
                  ? Object.values(country.currencies)
                      .map((c) => c.name)
                      .join(', ')
                  : ''}
              </p>
              <p>
                <b>Languages:</b>{' '}
                {country.languages
                  ? Object.values(country.languages).join(', ')
                  : ''}
              </p>
            </div>
          </div>
          <div className='borders'>
            <b>Border Countries:</b>
            <div className='border-tags'>
              {borderCountries.map((border) => {
                return (
                  <Link to={`/${border.split(' ').join('-')}`}>
                    <span key={border} className='border-tag el-shadow'>
                      {border}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryPage;
