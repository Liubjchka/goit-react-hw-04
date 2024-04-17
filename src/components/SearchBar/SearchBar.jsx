import css from "./SearchBar.module.css";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <div className={css.wrapper}>
      <header>
        <form className={css.form}>
          <label>
            <BsSearch />
            <input
              className={css.input}
              type="text"
              //  { autocomplete="off"
              //   autofocus}
              placeholder="Search images and photos"
            />
          </label>
          <button className={css.searchBtn} type="submit">
            Search
          </button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
