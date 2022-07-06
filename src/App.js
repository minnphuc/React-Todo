import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import TodoList from "./components/TodoList";
import ActionBar from "./components/ActionBar/ActionBar";
import Card from "./components/UI/Card";
import ActionProvider from "./store/ActionProvider";

import "./App.css";

const DUMMY_DATA = [
  { id: "1", content: "Learn React", finished: false },
  { id: "2", content: "Learn NodeJS", finished: false },
];

function App() {
  const [todoList, setTodoList] = useState(DUMMY_DATA);
  const [barMode, setBarMode] = useState("ADD");

  const addTodoItem = item => {
    setTodoList(state => {
      return state.concat(item);
    });
  };

  const checkTodoItem = id => {
    setTodoList(state => {
      return state.map(item => {
        if (item.id === id)
          return {
            ...item,
            finished: !item.finished,
          };

        return item;
      });
    });
  };

  const changeBarMode = mode => {
    setBarMode(mode);
  };

  return (
    <Card className="container">
      <ActionProvider>
        <h1>THINGS TO DO</h1>

        <SearchBar mode={barMode} onAddItem={addTodoItem} />

        <TodoList list={todoList} onCheckItem={checkTodoItem} />

        <ActionBar onChangeMode={changeBarMode} total={todoList.length} />
      </ActionProvider>
    </Card>
  );
}

export default App;
