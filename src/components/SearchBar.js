import { useState, useEffect, useContext } from "react";
import ActionContext from "../store/action-context";

import classes from "./SearchBar.module.css";
import searchIcon from "../images/search.svg";
import addIcon from "../images/add.svg";

function SearchBar(props) {
  const { dispatch } = useContext(ActionContext);

  const [inputTodo, setInputTodo] = useState("");
  const [inputQuery, setInputQuery] = useState("");

  useEffect(() => {
    setInputTodo("");
    setInputQuery("");
    dispatch({ type: "STOP-SEARCH" });
  }, [props.mode]);

  const changeHandler = e => {
    if (e.target.id === "add") setInputTodo(e.target.value);

    if (e.target.id === "search") {
      setInputQuery(e.target.value);
      dispatch({ type: "SEARCH", query: e.target.value });
    }
  };

  const submitHandler = e => {
    e.preventDefault();

    const mode = e.target.querySelector("input").id;

    if (mode !== "add" || inputTodo.trim() === "") return;

    props.onAddItem({
      id: Math.random().toString(),
      content: inputTodo,
      finished: false,
    });

    setInputTodo("");
  };

  return (
    <form className={classes.control} onSubmit={submitHandler}>
      {props.mode === "ADD" && (
        <div>
          <input
            type="text"
            id="add"
            placeholder="Add New..."
            onChange={changeHandler}
            value={inputTodo}
            autoFocus={true}
          />

          <button type="submit">
            <img src={addIcon} alt="addIcon" />
          </button>
        </div>
      )}

      {props.mode === "SEARCH" && (
        <div>
          <input
            type="text"
            id="search"
            placeholder="Search..."
            onChange={changeHandler}
            value={inputQuery}
            autoFocus={true}
          />

          <button type="button">
            <img src={searchIcon} alt="searchIcon" />
          </button>
        </div>
      )}
    </form>
  );
}

export default SearchBar;
