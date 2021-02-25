import React from "react";
import style from "../App.module.css";

export const IncompleteTodos = ({ todos, onClickComplete, onClickDelete }) => {
  return (
    <div className={style.incomplete_area}>
      <p className={style.title}>未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className={style.list_row}>
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
