import React from "react";

const ActionContext = React.createContext({
  searchMode: false,
  filterMode: false,
  queryValue: "",
  filteredValue: "",
  dispatch: () => {},
});

export default ActionContext;
