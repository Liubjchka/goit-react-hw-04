import { useState } from "react";
import css from "./SearchBar.module.css";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ onSubmit }) => {
  const [text, setText] = useState("");

  function changeText(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit(text);
    setText("");
  }

  return (
    <div className={css.wrapper}>
      <header>
        <form className={css.form} onSubmit={handleSubmit}>
          <BsSearch size="16px" />
          <input
            className={css.input}
            type="text"
            placeholder="Search images and photos"
            name="search"
            value={text}
            onChange={changeText}
            required
            autoComplete="off"
            autoFocus
          />
          <button className={css.searchBtn} type="submit">
            Search
          </button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
