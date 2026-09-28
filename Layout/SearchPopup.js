"use client";
import { useRouter } from "next/navigation";

// Recherche dans les articles du blog
const SearchPopup = ({ active, setActive }) => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.currentTarget.search.value.trim();
    setActive(false);
    if (query) router.push(`/blog?search=${encodeURIComponent(query)}`);
  };

  return (
    <div className={`search-popup ${active ? "active" : ""}`}>
      <div
        className="search-popup__overlay search-toggler"
        onClick={() => setActive(false)}
      />
      <div className="search-popup__content">
        <form onSubmit={handleSubmit}>
          <label htmlFor="search" className="sr-only">
            Recherche
          </label>
          <input type="text" id="search" name="search" placeholder="Rechercher un article…" />
          <button type="submit" aria-label="Lancer la recherche" className="thm-btn">
            <i className="icon-search" />
          </button>
        </form>
      </div>
    </div>
  );
};
export default SearchPopup;
