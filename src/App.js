import React, { useState } from "react";
import {
  InputTodo,
  IncompleteTodos,
  CompleteTodos,
  FavoriteTodo,
} from "./components/entry";

const App = () => {
  const [incompleteTodo, setIncompleteTodos] = useState([]);
  const [completeTodo, setCompleteTodos] = useState([]);
  const [favoriteTodo, setFavoriteTodo] = useState([]);
  const [value, setValue] = useState("");

  const inputValue = (e) => {
    setValue(e.target.value);
  };

  const onClickAdd = () => {
    if (value === "") {
      return;
    }
    setIncompleteTodos([...incompleteTodo, value]);
    setValue("");
  };

  const clickCompleteTodo = (index) => {
    const incompleteList = incompleteTodo.splice(index, 1);
    setIncompleteTodos([...incompleteTodo]);

    setCompleteTodos([...completeTodo, incompleteList]);
  };

  const deleteTodo = (index) => {
    incompleteTodo.splice(index, 1);
    setIncompleteTodos([...incompleteTodo]);
  };

  const clickBack = (index) => {
    const completeList = completeTodo.splice(index, 1);
    setCompleteTodos([...completeTodo]);

    setIncompleteTodos([...incompleteTodo, completeList]);
  };

  const clickFavoriteTodo = (index) => {
    const favoriteList = completeTodo.splice(index, 1);
    setCompleteTodos([...completeTodo]);

    setFavoriteTodo([...favoriteTodo, favoriteList]);
  };

  const clickDeleteFavoriteTodos = (index) => {
    const deleteFavorite = favoriteTodo.splice(index, 1);
    setFavoriteTodo([...favoriteTodo]);

    setCompleteTodos([...completeTodo, deleteFavorite]);
  };

  const allDeleteFavoriteButton = () => {
    setFavoriteTodo([]);
    setCompleteTodos([...completeTodo, ...favoriteTodo]);
  };
  return (
    <>
      <InputTodo
        value={value}
        inputValue={inputValue}
        add={onClickAdd}
        disabled={incompleteTodo.length >= 6}
      />
      {incompleteTodo.length >= 6 && (
        <p style={{ color: "red" }}>タスクを登録できません</p>
      )}
      <IncompleteTodos
        incompleteTodo={incompleteTodo}
        clickCompleteTodo={clickCompleteTodo}
        deleteTodo={deleteTodo}
      />
      <CompleteTodos
        completeTodo={completeTodo}
        clickBack={clickBack}
        clickFavoriteTodo={clickFavoriteTodo}
      />
      <FavoriteTodo
        allDeleteFavoriteButton={allDeleteFavoriteButton}
        favoriteTodo={favoriteTodo}
        clickDeleteFavoriteTodos={clickDeleteFavoriteTodos}
      />
    </>
  );
};

export default App;
