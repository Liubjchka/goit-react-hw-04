import { useState } from "react";
import css from "./SearchBar.module.css";
import { FiSearch } from "react-icons/fi";

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
    <div>
      <header className={css.header}>
        <form className={css.form} onSubmit={handleSubmit}>
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
          <button className={css.button} type="submit">
            <FiSearch size="16px" />
          </button>
        </form>
      </header>
    </div>
  );
};

export default SearchBar;
