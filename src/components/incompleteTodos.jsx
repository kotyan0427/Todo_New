import React from "react";
import style from "../App.module.css";

export const IncompleteTodos = ({
  incompleteTodo,
  clickCompleteTodo,
  deleteTodo,
}) => {
  return (
    <div className={style.incomplete_area}>
      <p className={style.title}>未完了のTODO</p>
      <ul>
        {incompleteTodo.map((todo, index) => {
          return (
            <div key={todo} className={style.list_row}>
              <li>{todo}</li>
              <button onClick={() => clickCompleteTodo(index)}>完了</button>
              <button onClick={() => deleteTodo(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
