import Filter from "./Filter";

import searchIcon from "../../images/search.svg";
import addIcon from "../../images/add.svg";

import classes from "./ActionBar.module.css";

function ActionBar(props) {
  const clickModeHandler = e => {
    const mode = e.target.dataset.mode;

    if (!mode) return;

    props.onChangeMode(mode);
  };

  return (
    <footer className={classes["action-bar"]}>
      <div className={classes.action} onClick={clickModeHandler}>
        <img src={addIcon} alt="add" data-mode="ADD" />
        <img src={searchIcon} alt="search" data-mode="SEARCH" />
        <span>{props.total} items left</span>
      </div>

      <Filter
        class={classes.filter__button}
        activeClass={classes["filter__button--active"]}
        onFilter={props.onFilter}
      />
    </footer>
  );
}

export default ActionBar;
