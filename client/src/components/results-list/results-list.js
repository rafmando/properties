import "../../sass/results-list.css";

export const ResultsList = ({ properties, search }) => {
  return (
    <div>
      <div className="results-list-container flex-item">
        {properties ? (
          properties
            .filter((property) => {
              let lowerCasedSearch = search.toLowerCase();
              if (lowerCasedSearch === "") {
                return property;
              }
              if (
                property.name.toLowerCase().includes(search) ||
                property.address.toLowerCase().includes(search) ||
                property.postcode.toLowerCase().includes(search)
              ) {
                return property;
              }
            })
            .map((property) => {
              return (
                <div key={property.address} className="result-card">
                  <img
                    className="result-card-img"
                    src="images/house.jpg"
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
          <p>Hold on a sec</p>
        )}
      </div>
    </div>
  );
};
