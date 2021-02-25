import React from "react";
import style from "../App.module.css";

export const InputTodo = ({ value, inputValue, add, disabled }) => {
  return (
    <div className={style.input_area}>
      <input
        placeholder="TODOを入力"
        type="text"
        value={value}
        onChange={inputValue}
        disabled={disabled}
      />
      <button onClick={add}>追加</button>
    </div>
  );
};
