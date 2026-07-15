function SearchBar({ query, setQuery, onSearch }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch();
  };

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <span className="search-icon">🔍</span>

      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;