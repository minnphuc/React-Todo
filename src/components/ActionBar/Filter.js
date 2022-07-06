import { useState, useContext } from "react";
import ActionContext from "../../store/action-context";

function Filter(props) {
  const [allBtnActive, setAllBtnActive] = useState(true);
  const [activeBtnActive, setActiveBtnActive] = useState(false);
  const [completeBtnActive, setCompleteBtnActive] = useState(false);

  const { dispatch } = useContext(ActionContext);

  const filterClickHandler = e => {
    const filter = e.target.dataset.filter;

    if (!filter) return;

    dispatch({
      type: filter === "ALL" ? "STOP-FILTER" : "FILTER",
      value: filter,
    });

    if (filter === "ALL") {
      setAllBtnActive(true);
      setActiveBtnActive(false);
      setCompleteBtnActive(false);
    }

    if (filter === "ACTIVE") {
      setActiveBtnActive(true);
      setAllBtnActive(false);
      setCompleteBtnActive(false);
    }

    if (filter === "COMPLETED") {
      setCompleteBtnActive(true);
      setAllBtnActive(false);
      setActiveBtnActive(false);
    }
  };

  return (
    <div onClick={filterClickHandler}>
      <span
        data-filter="ALL"
        className={`${props.class} ${allBtnActive ? props.activeClass : ""}`}
      >
        All
      </span>

      <span
        data-filter="ACTIVE"
        className={`${props.class} ${activeBtnActive ? props.activeClass : ""}`}
      >
        Active
      </span>

      <span
        data-filter="COMPLETED"
        className={`${props.class} ${
          completeBtnActive ? props.activeClass : ""
        }`}
      >
        Completed
      </span>
    </div>
  );
}

export default Filter;
