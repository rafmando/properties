export const propertyTypeOptions = [
  { label: "House", value: "House" },
  { label: "Flat/Apartment", value: "Apartment" },
  // { label: "Land", value: "Land" },
  // { label: "Commercial", value: "Commercial" },
  // { label: "Other", value: "Other" },
];

//temporaray
export const getPriceBuyOptions = () => {
  const len = 8000000;
  let increment = 10000;
  const arr = [];
  for (let i = 50000; i <= len; i += increment) {
    if (i === 100000) {
      increment = 10000;
    }
    if (i === 200000) {
      increment = 50000;
    }
    if (i === 500000) {
      increment = 1000000;
    }

    arr.push({ label: i, value: i });
  }

  arr.unshift({ label: "0", value: 0 });
  return arr;
};

export const bedroomOptions = [
  { label: "0", value: 0 },
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
  { label: "4", value: 4 },
  { label: "5", value: 5 },
  { label: "6", value: 6 },
  { label: "7", value: 7 },
  { label: "8", value: 8 },
  { label: "9", value: 9 },
  { label: "10", value: 10 },
];

export const filterItems = (
  allProperties,
  location,
  propertyType,
  minPrice,
  minBedroom,
  maxPrice,
  maxBedroom,
  currentRadius
) => {
  let updatedList = allProperties;

  if (location) {
    updatedList = updatedList.filter((property) => {
      let lowerCasedSearch = location.toLowerCase();
      if (lowerCasedSearch === "") return property;

      if (property.location.toLowerCase().includes(lowerCasedSearch))
        return property;
    });
  }

  if (propertyType) {
    let lowerCasedPropertyType = propertyType.toLowerCase();
    updatedList = updatedList.filter((property) =>
      property.type.includes(lowerCasedPropertyType)
    );
  }

  if (minPrice) {
    updatedList = updatedList.filter((property) => property.price >= minPrice);
  }

  if (maxPrice) {
    updatedList = updatedList.filter((property) => property.price <= maxPrice);
  }

  if (minBedroom) {
    updatedList = updatedList.filter(
      (property) => property.bedrooms >= minBedroom
    );
  }

  if (maxBedroom) {
    updatedList = updatedList.filter(
      (property) => property.bedrooms <= maxBedroom
    );
  }

  if (currentRadius) {
    updatedList = updatedList.filter(
      (property) => property.radius < currentRadius
    );
  }
  return updatedList;
};
