import { useState } from 'react';

const FilterBar = ({ handleInput, handleRegionFilter }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleInputChange = (event) => {
    handleInput(event.target.value);
  };

  const handleRegionClick = (region) => {
    handleRegionFilter(region);
  };

  return (
    <div className="filter-container">
      <div className="search-bar-wrapper el-shadow">
        <ion-icon name="search"></ion-icon>
        <input
          className="search-input"
          type="text"
          placeholder="Search for a country..."
          onChange={(target) => handleInputChange(target)}
        />
      </div>
      <div className="dropdown">
        <button
          className="dropdown-btn el-shadow"
          onClick={() => setMenuOpen((menuOpen) => !menuOpen)}>
          <span>Filter by Region</span>
          <ion-icon name="chevron-down"></ion-icon>
        </button>

        <ul className={`dropdown-list el-shadow${menuOpen ? ' menu-open' : ''}`}>
          <li className="dropdown-item" onClick={() => handleRegionClick('All')}>
            All
          </li>
          <li className="dropdown-item" onClick={() => handleRegionClick('Africa')}>
            Africa
          </li>
          <li className="dropdown-item" onClick={() => handleRegionClick('Americas')}>
            Americas
          </li>
          <li className="dropdown-item" onClick={() => handleRegionClick('Asia')}>
            Asia
          </li>
          <li className="dropdown-item" onClick={() => handleRegionClick('Europe')}>
            Europe
          </li>
          <li className="dropdown-item" onClick={() => handleRegionClick('Oceania')}>
            Oceania
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FilterBar;
