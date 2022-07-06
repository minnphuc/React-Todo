import React, { useReducer } from "react";

import ActionContext from "./action-context";

const defaultAction = {
  searchMode: false,
  filterMode: false,
  queryValue: "",
  filteredValue: "",
};

const actionReducer = (state, action) => {
  if (action.type === "SEARCH")
    return {
      ...state,
      searchMode: true,
      queryValue: action.query,
    };

  if (action.type === "FILTER")
    return {
      ...state,
      filterMode: true,
      filteredValue: action.value,
    };

  if (action.type === "STOP-SEARCH")
    return {
      ...state,
      searchMode: false,
    };

  if (action.type === "STOP-FILTER")
    return {
      ...state,
      filterMode: false,
    };

  return defaultAction;
};

function ActionProvider(props) {
  const [actionState, dispatchAction] = useReducer(
    actionReducer,
    defaultAction
  );

  const actionValue = {
    searchMode: actionState.searchMode,
    filterMode: actionState.filterMode,
    queryValue: actionState.queryValue,
    filteredValue: actionState.filteredValue,
    dispatch: dispatchAction,
  };

  return (
    <ActionContext.Provider value={actionValue}>
      {props.children}
    </ActionContext.Provider>
  );
}

export default ActionProvider;
