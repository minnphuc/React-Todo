import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import ActionContext from "../store/action-context";

import classes from "./TodoList.module.css";

function TodoList(props) {
  const actionCtx = useContext(ActionContext);

  let list = props.list;

  if (actionCtx.searchMode)
    list = list.filter(todo =>
      todo.content.toLowerCase().includes(actionCtx.queryValue.toLowerCase())
    );

  if (actionCtx.filterMode) {
    if (actionCtx.filteredValue === "ACTIVE")
      list = list.filter(todo => todo.finished === false);

    if (actionCtx.filteredValue === "COMPLETED")
      list = list.filter(todo => todo.finished === true);
  }

  const todoList = list.map(todo => (
    <TodoItem
      key={todo.id}
      item={{ ...todo, finishedClass: classes.finished }}
      onCheckItem={props.onCheckItem}
    />
  ));

  return (
    <ul className={classes.list}>
      {todoList}

      {todoList.length === 0 && (
        <p className={classes["error-msg"]}>There are no items !!!</p>
      )}
    </ul>
  );
}

export default TodoList;
