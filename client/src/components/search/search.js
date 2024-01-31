import "../../sass/search.css";

export const Search = ({ setSearch, setFilterActive }) => {
  const handleSearchProperties = (e) => {
    setSearch(e.target.value);
    setFilterActive(false);
  };
  return (
    <nav className="search-container flex-item">
      <div className="logo">Property Search</div>
      <div>
        <input
          className="search-input"
          placeholder="Search property..."
          onChange={(e) => handleSearchProperties(e)}
        />
      </div>
    </nav>
  );
};
