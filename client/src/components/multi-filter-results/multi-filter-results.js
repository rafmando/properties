import React from "react";
import "../../sass/multi-filter.css";

export default function MultiFilterResults({ filteredProperties }) {
  return (
    <div className="results-list-container flex-item">
      {filteredProperties.length !== 0 ? (
        filteredProperties.map((property) => {
          return (
            <div key={property.postcode} className="result-card">
              <img
                src="images/house.jpg"
                className="result-card-img"
                alt=""
              ></img>
              <p>Name: {property.name}</p>
              <p>Address: {property.address}</p>
              <p>Price: £{property.price}</p>
              <p>Location: {property.location}</p>
              <p>Postcode: {property.postcode}</p>
              <p>Radius: {property.radius}</p>
            </div>
          );
        })
      ) : (
        <p>No properties available</p>
      )}
    </div>
  );
}
