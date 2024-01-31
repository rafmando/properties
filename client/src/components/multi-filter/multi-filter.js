import { useState } from "react";
import Slider from "react-slider";

import "../../sass/multi-filter.css";
import {
  getPriceBuyOptions,
  propertyTypeOptions,
  bedroomOptions,
  filterItems,
} from "./multi-filter.utils";

export const MultiFilter = ({
  properties,
  setFilteredProperties,
  filteredProperties,
  filterActive,
  setFilterActive,
}) => {
  const buyPropertyPriceOptions = getPriceBuyOptions();
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("house");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [minBedroom, setMinBedroom] = useState(0);
  const [maxBedroom, setMaxBedroom] = useState(0);
  const MIN = 0;
  const MAX = 30;
  const [sliderValues, setSliderValues] = useState([MIN, MAX]);
  const currentRadius = sliderValues[1] - sliderValues[0];

  const handleMultiSearch = (e) => {
    e.preventDefault();

    const updatedItems = filterItems(
      properties,
      location,
      propertyType,
      minPrice,
      minBedroom,
      maxPrice,
      maxBedroom,
      currentRadius
    );

    setFilteredProperties(updatedItems);
    setFilterActive(true);
  };

  return (
    <div className="multi-filter-container flex-item">
      <form className="multi-filter">
        <div className="flex-item">
          <div className="multi-filter-col">
            <div className="input-group">
              <label>Location:</label>
              <input
                className="multi-filter-input"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label>Radius: {currentRadius}</label>
              <div style={{ marginLeft: "15px" }}>
                {sliderValues[0]} - {sliderValues[1]}
              </div>
              <Slider
                className={"slider"}
                onChange={setSliderValues}
                value={sliderValues}
                min={MIN}
                max={MAX}
                data-testid="slider"
                type="range"
              />
            </div>
          </div>
          <div className="multi-filter-col">
            <div className="input-group">
              <label htmlFor="property-type">Property type:</label>
              <select
                name="property-type"
                id="property-type "
                onChange={(e) => setPropertyType(e.target.value)}
              >
                {propertyTypeOptions.map((option) => {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="min-price">min price:</label>
              <select
                name="min-price"
                id="min-price"
                onChange={(e) => setMinPrice(e.target.value)}
              >
                {buyPropertyPriceOptions.map((option) => {
                  return (
                    <option key={option.value} value={option.value}>
                      £{option.label}
                    </option>
                  );
                })}
              </select>
              <label htmlFor="max-price">max price:</label>
              <select
                name="max-price"
                id="max-price"
                onChange={(e) => setMaxPrice(e.target.value)}
              >
                {buyPropertyPriceOptions.map((option) => {
                  return (
                    <option key={option.value} value={option.value}>
                      £{option.label}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="min-bedroom">min bedroom:</label>
              <select
                name="min-bedroom"
                id="min-bedroom"
                onChange={(e) => setMinBedroom(e.target.value)}
              >
                {bedroomOptions.map((option) => {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  );
                })}
              </select>
              <label htmlFor="max-bedroom">max bedroom:</label>
              <select
                name="max-bedroom"
                id="max-bedroom"
                onChange={(e) => setMaxBedroom(e.target.value)}
              >
                {bedroomOptions.map((option) => {
                  return (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>

        <div className="row flex-item">
          {filterActive ? (
            <p>Amount of properties available: {filteredProperties.length}</p>
          ) : (
            <p>Filter results</p>
          )}
        </div>
        <div className="row flex-item">
          <button
            className="search-button"
            onClick={(e) => handleMultiSearch(e)}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};
