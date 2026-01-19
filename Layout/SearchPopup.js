const SearchPopup = ({ active, setActive }) => {
  return (
    <div className={`search-popup ${active ? "active" : ""}`}>
      <div
        className="search-popup__overlay search-toggler"
        onClick={() => setActive(false)}
      />
      <div className="search-popup__content">
        <form action="#" onSubmit={() => setActive(false)}>
          <label htmlFor="search" className="sr-only">
            search here
          </label>
          <input type="text" id="search" placeholder="Search Here..." />
          <button type="submit" aria-label="search submit" className="thm-btn">
            <i className="icon-search" />
          </button>
        </form>
      </div>
    </div>
  );
};
export default SearchPopup;
