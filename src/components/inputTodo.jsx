import React from "react";
import style from "../App.module.css";

export const InputTodo = ({ todoText, onChange, onClick, disabled }) => {
  return (
    <div className={style.input_area}>
      <input
        placeholder="TODOを入力"
        type="text"
        value={todoText}
        onChange={onChange}
        disabled={disabled}
      />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
