import React from "react";
import style from "../App.module.css";

export const CompleteTodos = ({ todos, onClickBack }) => {
  return (
    <div className={style.complete_area}>
      <p className={style.title}>完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className={style.list_row}>
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
