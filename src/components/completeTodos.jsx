import React from "react";
import style from "../App.module.css";

export const CompleteTodos = ({
  completeTodo,
  clickBack,
  clickFavoriteTodo,
}) => {
  return (
    <div className={style.complete_area}>
      <p className={style.title}>完了のTODO</p>
      <ul>
        {completeTodo.map((todo, index) => {
          return (
            <div key={todo} className={style.list_row}>
              <li>{todo}</li>
              <button onClick={() => clickBack(index)}>戻す</button>
              <span onClick={() => clickFavoriteTodo(index)}>★</span>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
