import React from "react";
import style from "../App.module.css";

export const FavoriteTodo = ({
  allDeleteFavoriteButton,
  favoriteTodo,
  clickDeleteFavoriteTodos,
}) => {
  return (
    <div className={style.favorite_area}>
      <p className={style.title}>
        お気に入りTODO
        <span>
          <button onClick={allDeleteFavoriteButton}>一括解除</button>
        </span>
      </p>
      <ul>
        {favoriteTodo.map((todo, index) => {
          return (
            <div key={index} className={style.list_row}>
              <li>{todo}</li>
              <button onClick={() => clickDeleteFavoriteTodos(index)}>
                お気に入り解除
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
