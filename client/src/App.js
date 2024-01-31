import "./App.css";
import { MultiFilter } from "./components/multi-filter";
import { ResultsList } from "./components/results-list";
import { Search } from "./components/search";
import { useEffect, useState } from "react";
import axios from "axios";
import MultiFilterResults from "./components/multi-filter-results/multi-filter-results";

function App() {
  const [search, setSearch] = useState("");
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [filterActive, setFilterActive] = useState(false);

  const fetchAllProperties = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/properties/all`);
      setProperties(response.data.properties);
    } catch (err) {
      return err.message;
    }
  };

  useEffect(() => {
    fetchAllProperties();
  }, []);

  return (
    <>
      <Search
        setSearch={setSearch}
        search={search}
        setFilterActive={setFilterActive}
      />
      <MultiFilter
        properties={properties}
        setFilteredProperties={setFilteredProperties}
        filteredProperties={filteredProperties}
        filterActive={filterActive}
        setFilterActive={setFilterActive}
      />
      {filterActive == false ? (
        <ResultsList properties={properties} search={search} />
      ) : (
        <MultiFilterResults filteredProperties={filteredProperties} />
      )}
    </>
  );
}

export default App;
